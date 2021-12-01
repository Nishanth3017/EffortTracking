import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { RegService } from '../../register/reg.service';

@Component({
  selector: 'app-mstream',
  templateUrl: './mstream.component.html',
  styleUrls: ['./mstream.component.css']
})
export class MstreamComponent implements OnInit {
  show1:boolean =false;
  list:object[];
  constructor(public nav: AppService,public router :Router,public b:AppService,private ser:RegService) {
    this.show1=false
   }

  ngOnInit() {
  }
  display1()
  {
    this.router.navigateByUrl('mjee');
  }
  display2()
  {
    this.router.navigateByUrl('mms');
  }
  display3()
  {
    this.router.navigateByUrl('mds');
  }
  display4()
  {
    this.router.navigateByUrl('mui');
  }
 display5()
 {
   this.router.navigateByUrl('home');
 }
  view()
  {
    this.show1=true;
   this.ser.view()
   .then(a=>{this.list=a})
   
  }
  
}
