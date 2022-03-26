import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private HttpClient:HttpClient) { }

  //api calling 
  //HttpClient ---> Method

  saveUser(user:any):Observable<any>{
      //node api
      return this.HttpClient.post("http://localhost:3000/savedevloper",user)
  }
  authenticate(user:any):Observable<any>{
      return this.HttpClient.post("http://localhost:3000/login",user)
  }
  saveCustomer(user:any):Observable<any>{
      return this.HttpClient.post("http://localhost:3000/savedevloper",user) 
  }
  sendOtpForPassword(user:any):Observable<any>{
    return this.HttpClient.post("http://localhost:3000/sendOtpForPassword",user)
  }
}
