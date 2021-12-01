import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rms',
  templateUrl: './rms.component.html',
  styleUrls: ['./rms.component.css']
})
export class RmsComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }
  goBack()
  {
  this.location.back();
  }
}
