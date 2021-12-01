import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }
  register(){
    this.router.navigateByUrl('register');
  }
  login()
  {
    this.router.navigateByUrl('login');
  }
}
