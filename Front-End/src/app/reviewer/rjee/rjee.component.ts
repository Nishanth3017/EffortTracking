import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rjee',
  templateUrl: './rjee.component.html',
  styleUrls: ['./rjee.component.css']
})
export class RjeeComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }
  goBack()
  {
  this.location.back();
  }
}
