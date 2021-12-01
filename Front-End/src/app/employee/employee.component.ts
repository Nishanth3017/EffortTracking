import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  loginForm:FormGroup
  constructor(private fb:FormBuilder,private router:Router, private nav:AppService,private b:AppService,private emp:EmployeeService) { }
  successMessage:string;
  errorMessage:string;
  ngOnInit() {
    this.loginForm=this.fb.group({
      empId:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
  display()
  {
    this.nav.hide();
    this.router.navigateByUrl('stream');
    this.b.streamshow();
  }
  login(){
    this.errorMessage=null;
    this.successMessage=null;
    this.emp.login(this.loginForm.value)
    .then( response =>response=this.display())
    .catch((error)=>this.errorMessage=error.message)
    // this.nav.hide();
    // this.router.navigateByUrl('stream');
    // this.b.streamshow();
  }
}
