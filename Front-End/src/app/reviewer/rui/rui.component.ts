import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rui',
  templateUrl: './rui.component.html',
  styleUrls: ['./rui.component.css']
})
export class RuiComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }
  goBack()
  {
  this.location.back();
  }
}
