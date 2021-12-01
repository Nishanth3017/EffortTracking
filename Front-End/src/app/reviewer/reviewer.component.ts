import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent implements OnInit {
  loginForm:FormGroup
  constructor(private router:Router, private fb:FormBuilder,private nav:AppService,private b:AppService
    ) { }
  successMessage:string;
  errorMessage:string;
  ngOnInit() {
    this.loginForm=this.fb.group({
      reviewerId:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }

  display()
  {
    this.nav.hide();
    this.router.navigateByUrl('rstream');
    this.b.streamshow();
  }
  // login(){
  //   this.errorMessage=null;
  //   this.successMessage=null;
  //   this.rev.login(this.loginForm.value)
  //   .then( response =>response=this.display())
  //   .catch((error)=>this.errorMessage=error.message)
  //   // this.nav.hide();
  //   // this.router.navigateByUrl('stream');
  //   // this.b.streamshow();
  // }
}
