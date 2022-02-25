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
      console.log(user);
      //node api
      return this.HttpClient.post("http://localhost:3000/users",user)
  }
  authenticate(user:any){
    console.log(user);
  }
}
