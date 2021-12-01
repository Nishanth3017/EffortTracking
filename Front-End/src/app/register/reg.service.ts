import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegService {

  constructor(private http:Http) { }

  saveDetails(data) :Promise<any>{
    return this.http.post("http://localhost:3333/Efforttracking/empAPI/add",data)
    .toPromise()
    .then(response=>response.json())
    .catch(this.errorHandler)
  }
  
  login(data) :Promise<any>{
    return this.http.post("http://localhost:3333/Efforttracking/empAPI/login",data)
    .toPromise()
    .then(a=>a.json() as any)
    .catch(this.errorHandler)

  }
  getdetails():Promise<any>{
    return this.http.get("http://localhost:3333/Efforttracking/effortAPI/getDetails")
    .toPromise()
    .then(a=>a.json() as object[])
    .catch(this.errorHandler)

  }
  view():Promise<any>{
    return this.http.get("http://localhost:3333/Efforttracking/effortAPI/View")
    .toPromise()
    .then(a=>a.json() as object[])
    .catch(this.errorHandler)

  }
  effort(data):Promise<any>{
    return this.http.post("http://localhost:3333/Efforttracking/effortAPI/effort",data)
    .toPromise()
    .then(a=>a.json())
    .catch(this.errorHandler)
  }
  private errorHandler(error:any):Promise<any> {
    console.error("Error occured",error);    
    return Promise.reject(error.json() || error);
    }
}
