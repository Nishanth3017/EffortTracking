import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RegService } from '../register/reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ms',
  templateUrl: './ms.component.html',
  styleUrls: ['./ms.component.css']
})
export class MsComponent implements OnInit {
  list:object[];
  constructor(private location:Location,private ser:RegService,public router:Router) { }

  ngOnInit() {
  }
  goBack()
  {
  this.location.back();
  }
  getdetails()
{
     this.ser.getdetails()
    .then(a=>{this.list=a})
    
}
display5()
{
  this.router.navigateByUrl('home');
}
}
