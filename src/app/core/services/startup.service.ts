import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService } from './menu.service';


/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
  constructor(private menuService: MenuService, private http: HttpClient) {}

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('assets/data/menu.json')
        .pipe(
          catchError(res => {
            resolve();
            return res;
          })
        )
        .subscribe(
          (res: any) => {
            this.menuService.set(res.menu);
          },
          () => {},
          () => {
            resolve();
          }
        );
    });
  }
}
