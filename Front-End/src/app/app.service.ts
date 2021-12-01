import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/toPromise";
@Injectable()
export class AppService {
  visible: boolean;
  mar:boolean;
  stre:boolean;
  constructor(private http:Http) 
  { 
    this.visible = true;
    this.mar=true;
    this.stre=false; 
  }

  streamshow(){ this.stre=true;}

  marqshow(){this.mar=true;}

  marqhide(){this.mar=false;}

  hide() { this.visible = false;}

  show() { this.visible = true;}
  
  toggle() { this.visible = !this.visible; }

  streamhide(){this.stre=false;}

  available(){ this.visible=true;}

 
//  saveTable(data) :Promise<any>{
//     return this.http.post('',data)
//     .toPromise()
//     .then(response=>response.json())
//     .catch(this.errorHandler)
//   }

 
  }

