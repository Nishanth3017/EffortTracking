import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { RegService } from '../register/reg.service';


// import { Router } from '@angular/router';
// import { StreamServiceService } from './stream-service.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  show1:boolean =false;
 
  list:object[];
  constructor(public nav: AppService,public router :Router,public b:AppService
    ,private ser:RegService) { 
      this.show1=false;
    
  }

  ngOnInit() {
  }

  display1()
  {
    this.router.navigateByUrl('jee');
  }
 
  display2()
  {
    this.router.navigateByUrl('ms');
  }
  display3()
  {
    this.router.navigateByUrl('ds');
  }
  display4()
  {
    this.router.navigateByUrl('ui');
  }
  view()
  {
    this.show1=true;
   this.ser.view()
   .then(a=>{this.list=a})
   
  }
  display5()
  {
    this.router.navigateByUrl('home');
  }


}
