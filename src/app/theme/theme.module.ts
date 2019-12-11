import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout/admin-layout.component';

const SETTINGDRAWER = [];
const COMPONENTS = [AdminLayoutComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    SharedModule,
  ],
  entryComponents: SETTINGDRAWER
})
export class ThemeModule { }
