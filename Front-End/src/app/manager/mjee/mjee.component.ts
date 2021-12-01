import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RegService } from '../../register/reg.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mjee',
  templateUrl: './mjee.component.html',
  styleUrls: ['./mjee.component.css']
})
export class MjeeComponent implements OnInit {
list:object[];
show:boolean=false;
count:number;
allocateForm:FormGroup;
successMessage:string;
errorMessage:string;
  constructor(private location:Location,private ser:RegService,private fb:FormBuilder,public router:Router) { 
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
  effort()
  {
  
      this.errorMessage=null;
      this.successMessage=null;
      this.ser.effort(this.allocateForm.value)
      .then((response)=>this.successMessage=response.message)
      .catch((error)=>this.errorMessage=error.message)
    // this.ser.effort(this.allocateForm.value)
    // .then((response)=>this.successMessage=response.message)
    // .catch()
  }
  display5()
  {
    this.router.navigateByUrl('home');
  }
}
