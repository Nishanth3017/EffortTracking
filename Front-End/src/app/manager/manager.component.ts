import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  loginForm:FormGroup
  constructor(private router:Router, private fb:FormBuilder,private nav:AppService,
    private b:AppService) { }
  successMessage:string;
  errorMessage:string;
  ngOnInit() {
    this.loginForm=this.fb.group({
      managerId:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
  
  
}
