import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';
import { CoreModule } from './core/core.module';
import { StartupService, DefaultInterceptor } from './core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { commonConfig } from '../assets/config/config.js';
import { RoutesModule } from './routes/routes.module';


export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,
    CoreModule,
    RoutesModule,
    ThemeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
    {
      provide:'BASE_CONFIG', useValue: commonConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
