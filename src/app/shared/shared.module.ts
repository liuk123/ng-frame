import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonUtilsSrv } from './utils/common-util.service';
import { valideUtilsSrv } from './utils/valide-util.service';
import { ObjectUtilSrv } from './utils/object-util.service';
import { TimeUtilSrv } from './utils/time-util.service';
import { MoneyFormatPipe } from './pipes/money-format.pipe';

//module
const THIRD_MODULES = [
 
]
//component
const COMPONENTS = [
 
]
//directive
const DIRECTIVES = [

];
//pipes
const PIPES = [
  MoneyFormatPipe
];
//service
const SERVICE = [
  CommonUtilsSrv,
  valideUtilsSrv,
  ObjectUtilSrv,
  TimeUtilSrv
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,

    ...THIRD_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    ...THIRD_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  providers: SERVICE
})
export class SharedModule { }
