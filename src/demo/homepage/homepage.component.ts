import { Component, OnInit } from '@angular/core';
import { CommonUtilsSrv } from 'src/app/shared';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private commonUtilSrv: CommonUtilsSrv,
  ) { }

  ngOnInit() { }

  getExplore(){
    console.log(this.commonUtilSrv.getExplore())
  }
  getOS(){
    console.log(this.commonUtilSrv.getOS())
  }

}
