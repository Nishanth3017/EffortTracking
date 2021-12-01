import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RegService } from '../register/reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  list:object[];
  constructor(private location:Location,private ser:RegService,public router:Router) { }

  ngOnInit() {
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
