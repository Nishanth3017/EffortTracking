import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { RegService } from './reg.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import { DateValidator } from './date.Validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup
 
  constructor(private fb:FormBuilder,private b:AppService,private ap:RegService,private route:Router,private location:Location) { }
  successMessage:string;
  errorMessage:string;
  streamList:string[]=["JEE","MS","UI","DS"];
  pwdValidForm1:FormGroup

  display()
  {
    this.location.back();
    this.b.marqshow();
  }
  ngOnInit() {
    this.registerForm=this.fb.group({
      name:["",[Validators.required,Validators.pattern("^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$")]],
      password:["",[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#^/\.,!%*?&-+_=<>{}:;~|`])[A-Za-z\d$@$!%*?&].{8,}")]],
      stream:["",[]],
      dateOfBirth:["",[Validators.required, DateValidator.checkDate]],
      cnfpassword:["",[Validators.required]]
    })
  
  }
  saveDetails(){
    this.errorMessage=null;
    this.successMessage=null;
    this.ap.saveDetails(this.registerForm.value)
    .then((response)=>this.successMessage=response.message)
    .catch((error)=>this.errorMessage=error.message)
  }
}
