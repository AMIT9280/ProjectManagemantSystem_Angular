import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private hc:HttpClient) { }

  addStatus(status:any):Observable<any>{
    return this.hc.post("http://localhost:3000/status",status)
   }
 
   getAllStatus():Observable<any>{
     return this.hc.get("http://localhost:3000/status")
   }
   deleteStatus(statusId:any):Observable<any>{
     return this.hc.delete("http://localhost:3000/status/"+statusId)
   }
   getStatusById(statusId:any):Observable<any>{
     return this.hc.get("http://locslhost:3000/status/"+statusId)
   }
   updateStatus(status:any):Observable<any>{
     return this.hc.put("http://localhost:3000/status",status)
   }

}
