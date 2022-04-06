import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private hc:HttpClient) { }
  addTask(task:any):Observable<any>{
    return this.hc.post("http://localhost:3000/task",task)
   }
 
   getAllTask():Observable<any>{
     return this.hc.get("http://localhost:3000/task")
   }
   deleteTask(taskId:any):Observable<any>{
     return this.hc.delete("http://localhost:3000/task/"+taskId)
   }
   getTaskById(taskId:any):Observable<any>{
     return this.hc.get("http://locslhost:3000/task/"+taskId)
   }
   updateTask(task:any):Observable<any>{
     return this.hc.put("http://localhost:3000/task",task)
   }
}
