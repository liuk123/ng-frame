import { NgModule } from '@angular/core';
import { UploadService } from './upload.service';

export {
  // AuthGuardService
}
@NgModule()
export class ServicesModule {
  static forRoot(){
    return {
      ngModule: ServicesModule,
      providers: [
        UploadService,
      ]
    }
  }
}
