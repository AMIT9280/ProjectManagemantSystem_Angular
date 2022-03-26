import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private hc:HttpClient) { }
  addProject(project:any):Observable<any>{
    return this.hc.post("http://localhost:3000/projects",project)
   }
 
   getAllProject():Observable<any>{
     return this.hc.get("http://localhost:3000/projects")
   }
   deleteproject(projectId:any):Observable<any>{
     return this.hc.delete("http://localhost:3000/projects/"+projectId)
   }
   getProjectById(projectId:any):Observable<any>{
     return this.hc.get("http://locslhost:3000/projects/"+projectId)
   }
   updateProject(project:any):Observable<any>{
     return this.hc.put("http://localhost:3000/projects",project)
   }

}
