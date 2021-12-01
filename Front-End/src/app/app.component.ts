import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from './employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm:FormGroup
  constructor(private fb:FormBuilder,private router:Router, private nav:AppService,private b:AppService,private emp:EmployeeService) {}
  title = 'project';
  successMessage:string;
  errorMessage:string;
  ngOnInit() {
    this.router.navigate(['/home']);
    this.loginForm=this.fb.group({
      empId:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
  register(){
    this.router.navigateByUrl('register');
    
  }
}
