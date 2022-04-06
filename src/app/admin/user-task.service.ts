import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  constructor(private hc:HttpClient) { }
  addUserTask(UserTask:any):Observable<any>{
    return this.hc.post("http://localhost:3000/UserTask",UserTask)
   }
 
   getAllUserTask():Observable<any>{
     return this.hc.get("http://localhost:3000/UserTask")
   }
   deleteUserTask(UserTaskId:any):Observable<any>{
     return this.hc.delete("http://localhost:3000/UserTask/"+UserTaskId)
   }
   getUserTaskById(UserTaskId:any):Observable<any>{
     return this.hc.get("http://locslhost:3000/UserTask/"+UserTaskId)
   }
   updateUserTask(UserTask:any):Observable<any>{
     return this.hc.put("http://localhost:3000/UserTask",UserTask)
   }
}
