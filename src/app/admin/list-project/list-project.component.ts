import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects:Array<any> = []
  constructor(private cm:CommonService,private projectService:ProjectService) { 
    console.log("List Project");
  }
  ngOnInit(): void {
      this.getAllProjects()
  }
  deleteProject(projectId:any){
    this.projectService.deleteproject(projectId).subscribe(resp=>{
      if(resp.status == 200 ){
          this.cm.tsService.success("",resp.msg,{timeOut:3000});
          this.getAllProjects() 
      }else{
        this.cm.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
}

editProject(projectId:any){
this.cm.router.navigateByUrl("/editproject/"+projectId)
}

getAllProjects(){
this.projectService.getAllProject().subscribe(resp=>{
  console.log(resp);
   this.projects =  resp.data 
  }) 
}

}
