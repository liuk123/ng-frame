import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';

const COMPONENTS = [
 
];
const COMPONENTS_NOROUNT = [
  
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  imports: [
    SharedModule,
    RouteRoutingModule,
  ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule { }
