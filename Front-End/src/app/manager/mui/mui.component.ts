import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RegService } from '../../register/reg.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mui',
  templateUrl: './mui.component.html',
  styleUrls: ['./mui.component.css']
})
export class MuiComponent implements OnInit {
list:object[];
allocateForm:FormGroup
count:number;
show:boolean=false;
successMessage:string;
errorMessage:string;
  constructor(private location:Location,private ser:RegService,public router :Router,private fb:FormBuilder) { 
    this.show=false;
  }

  ngOnInit() {
    this.allocateForm=this.fb.group({
      name:["",[]],
      empId:["",[]],
      allocate:["",[]]
    })
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
  display(c)
  {
    this.show=true;
    this.count=c;
  }
  display5()
  {
    this.router.navigateByUrl('home');
  }
 
  effort()
  {
    this.errorMessage=null;
    this.successMessage=null;
    this.ser.effort(this.allocateForm.value)
    .then((response)=>this.successMessage=response.message)
    .catch((error)=>this.errorMessage=error.message)
  }

}
