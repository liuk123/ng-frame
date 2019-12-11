import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { DemoRoutingModule } from './demo-routing.module';
import { UploadComponent } from './upload/upload.component';
import { FormComponent } from './form/form.component';
import { ElementComponent } from './element/element.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { TimeComponent } from './time/time.component';
import { ObjectComponent } from './object/object.component';



@NgModule({
  declarations: [HomepageComponent, UploadComponent, FormComponent, ElementComponent, DirectivesComponent, NgrxComponent, TimeComponent, ObjectComponent],
  imports: [
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
