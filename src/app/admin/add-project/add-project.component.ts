import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private ps:ProjectService,private cm:CommonService) { }
  projectTitle:string=""
  description:string=""
  technology:string=""
  estimatedHours:string=""
  startDate:string="" 
  completionDate:string=""
  ngOnInit(): void {
  }
  saveProject(){
    let project ={projectTitle:this.projectTitle,description:this.description,technology:this.technology,estimatedHours:this.estimatedHours,startDate:this.startDate,completionDate:this.completionDate}
    this.ps.addProject(project).subscribe(resp=>{
      console.log(resp);
      if(resp.status == 200){
        //navigate list role
        this.cm.tsService.success("",resp.msg,{
          timeOut:3000
        })
        this.cm.router.navigateByUrl("/listproject")
      }else{

      }
      
    })
  }
}

