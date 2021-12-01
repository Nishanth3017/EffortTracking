import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegService } from '../register/reg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private router:Router, private fb:FormBuilder,private mySer:RegService) {
    this.id=null;
   }
 
  errorMessage:string
  successMessage:string
  id:string 
  ngOnInit() {
    this.loginForm=this.fb.group({
      empId:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
 
  @Output('notify') notify:EventEmitter<any> = new EventEmitter<any>();
  login()
  {
    var flag:boolean=true;
    this.notify.emit(flag);
    this.successMessage==null;
    this.errorMessage=null;
    this.id=this.loginForm.controls.empId.value
    if(this.loginForm.controls.empId.value==100000 && this.loginForm.controls.password.value=="admin")
    {
      this.router.navigate(['mstream'])
    }
    else
    {
      console.log(this.loginForm.value)
      this.mySer.login(this.loginForm.value)
      .then(e=>this.router.navigate(['stream']))
      .catch(e=>this.errorMessage=e.message)
      

    }   

  }

}
