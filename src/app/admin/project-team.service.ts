import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectTeamService {

  constructor(private hc:HttpClient) { }
  addProjectTeam(projectTeam:any):Observable<any>{
    return this.hc.post("http://localhost:3000/projectTeam",projectTeam)
   }
 
   getAllProjectTeam():Observable<any>{
     return this.hc.get("http://localhost:3000/projectTeam")
   }
   deleteProjectTeam(projectTeamId:any):Observable<any>{
     return this.hc.delete("http://localhost:3000/projectTeam/"+projectTeamId)
   }
   getProjectTeamById(projectTeamId:any):Observable<any>{
     return this.hc.get("http://locslhost:3000/projectTeam/"+projectTeamId)
   }
   updateProjectTeam(projectTeam:any):Observable<any>{
     return this.hc.put("http://localhost:3000/projectTeam",projectTeam)
   }

}
