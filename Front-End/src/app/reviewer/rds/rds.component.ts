import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rds',
  templateUrl: './rds.component.html',
  styleUrls: ['./rds.component.css']
})
export class RdsComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }
  goBack()
  {
  this.location.back();
  }
}
