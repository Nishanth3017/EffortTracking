import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rstream',
  templateUrl: './rstream.component.html',
  styleUrls: ['./rstream.component.css']
})
export class RstreamComponent implements OnInit {
marqq:boolean=true;
  constructor(public nav: AppService,public router :Router,public b:AppService) {
    this.marqq=true;
   }

  ngOnInit() {
  }
  display1()
  {
    this.router.navigateByUrl('rjee');
  }
  display2()
  {
    this.router.navigateByUrl('rms');
  }
  display3()
  {
    this.router.navigateByUrl('rds');
  }
  display4()
  {
    this.router.navigateByUrl('rui');
  }
 
  display5()
  {
    this.nav.toggle();
    this.b.streamhide();
    this.b.marqshow();
    this.marqq=false;
  }
}
