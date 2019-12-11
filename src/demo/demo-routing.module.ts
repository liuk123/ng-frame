import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UploadComponent } from './upload/upload.component';
import { FormComponent } from './form/form.component';
import { ElementComponent } from './element/element.component';
import { DirectivesComponent } from './directives/directives.component';
import { TimeComponent } from './time/time.component';
import { ObjectComponent } from './object/object.component';

const routes: Routes = [
    // { path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {
        path:'homepage',
        component: HomepageComponent,
    },{
        path:'upload',
        component: UploadComponent,
    },{
        path:'form',
        component: FormComponent,
    },{
        path:'element',
        component: ElementComponent,
    },{
        path:'directive',
        component: DirectivesComponent,
    },{
        path:'time',
        component: TimeComponent,
    },{
        path:'object',
        component: ObjectComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule {}
