import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectModuleService {

  constructor(private hc:HttpClient) { }

  addProjectMOdule(projectMOdule:any):Observable<any>{
    return this.hc.post("http://localhost:3000/projectMOdule",projectMOdule)
   }
 
   getAllProjectMOdule():Observable<any>{
     return this.hc.get("http://localhost:3000/getAllprojectMOduleMemberBy")
   }
   deleteProjectMOdule(projectMOduleId:any):Observable<any>{
     return this.hc.delete("http://localhost:3000/projectMOdule/"+projectMOduleId)
   }
   getProjectMOduleById(projectMOduleId:any):Observable<any>{
     return this.hc.get("http://locslhost:3000/projectMOdule/"+projectMOduleId)
   }
   updateProjectMOdule(projectMOdule:any):Observable<any>{
     return this.hc.put("http://localhost:3000/projectMOdule",projectMOdule)
   }
}
