import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ProjectModuleService } from '../project-module.service';

@Component({
  selector: 'app-add-project-module',
  templateUrl: './add-project-module.component.html',
  styleUrls: ['./add-project-module.component.css']
})
export class AddProjectModuleComponent implements OnInit {

  constructor(private pms:ProjectModuleService,private cm:CommonService) { }
  projectId:string=""
  moduleName:string=""
  description:string=""
  estimatedHours:string=""
  status:string=""
  startDate:string=""
  ngOnInit(): void {
  }
  saveProjectMOdule(){
    let projectMOdule ={projectId:this.projectId,startDate:this.startDate,status:this.status,estimatedHours:this.estimatedHours,moduleName:this.moduleName,description:this.description}
    this.pms.addProjectMOdule(projectMOdule).subscribe(resp=>{
      console.log(resp);
      if(resp.status == 200){
        //navigate list project module
        this.cm.tsService.success("",resp.msg,{
          timeOut:3000
        })
        this.cm.router.navigateByUrl("/getAllProjectMOduleMemberBy")
      }else{

      }
      
    })
  }
}
