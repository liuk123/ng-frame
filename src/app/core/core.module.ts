import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ServicesModule } from '../services/services.module';
import { AppStoreModule } from '../reducers';



@NgModule({
  declarations: [],
  imports: [
    ServicesModule.forRoot(),
    AppStoreModule,
  ],
  providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
