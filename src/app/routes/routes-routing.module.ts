import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { 
        path: 'demo',
        loadChildren: () => 
          import('../../demo/demo.module').then(m=>m.DemoModule),
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: environment.useHash,
        scrollPositionRestoration: 'top',
      }
    )],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
