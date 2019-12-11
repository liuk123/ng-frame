import { Component, OnInit } from '@angular/core';
import { ObjectUtilSrv } from 'src/app/shared';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  obj={
    a: {
      x: ' 3',
      y:[' 6'],
      z:{a: {a:' 7'}},
      w:{b: [' 8', {c: ' 9', cc: null}]}
    },
    b: [' 4'],
    c: '5',
    d: true,
    e: 6,
    w: '',
    z: ' ',
    y: null
  }
  manoyValue = "1041231231230.137"
  constructor(
    private objUtilSrv: ObjectUtilSrv
  ) { }

  ngOnInit() {
  }

  dotrim(){
    console.log(this.objUtilSrv.trim(this.obj))
  }
  delNull(){
    console.log(this.objUtilSrv.delNull(this.obj))
  }
  delNullAndTrim(){
    console.log(this.objUtilSrv.delNullAndTrim(this.obj))
  }
  //金额
  digitUppercase(){
    console.log(this.objUtilSrv.digitUppercase(this.manoyValue))
  }
}
