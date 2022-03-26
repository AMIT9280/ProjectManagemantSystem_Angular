import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }

  addUser(user:any):Observable<any>{
    return this.hc.post("http://localhost:3000/users",user)
   }
 
   getAllUsers():Observable<any>{
     return this.hc.get("http://localhost:3000/users")
   }
   deleteUser(userId:any):Observable<any>{
     return this.hc.delete("http://localhost:3000/users/"+userId)
   }
   getUserById(userId:any):Observable<any>{
     return this.hc.get("http://locslhost:3000/users/"+userId)
   }
   updateUser(user:any):Observable<any>{
     return this.hc.put("http://localhost:3000/users",user)
   }
}
