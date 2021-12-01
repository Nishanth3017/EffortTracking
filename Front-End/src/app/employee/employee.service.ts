import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { stringify } from '@angular/core/src/util';

@Injectable()
export class EmployeeService {

  constructor(private http:Http) { 
  }
  saveDetails(data) :Promise<any>{
    return this.http.post('http://localhost:3333/effortTracking/empAPI/add',data)
    .toPromise()
    .then(response=>response.json())
    .catch(this.errorHandler)
  }
  login(data) :Promise<any>{
    return this.http.post('http://localhost:3333/effortTracking/empAPI/login',data)
    .toPromise()
    .then(response=>response.json())
    .catch(this.errorHandler)
  }

  private errorHandler(error:any):Promise<any> {
    console.error("Error occured",error);    
    return Promise.reject(error.json() || error);
    }
}
