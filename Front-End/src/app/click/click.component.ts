import { Component, OnInit } from '@angular/core';
import { RegService } from '../register/reg.service';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {
  list:object[]
  constructor(private ser:RegService) { }

  ngOnInit() {
  }
  getdetails()
  {
       this.ser.getdetails()
      .then(a=>{this.list=a})
      
  }

}
