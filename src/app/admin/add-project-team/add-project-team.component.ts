import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ProjectTeamService } from '../project-team.service';

@Component({
  selector: 'app-add-project-team',
  templateUrl: './add-project-team.component.html',
  styleUrls: ['./add-project-team.component.css']
})
export class AddProjectTeamComponent implements OnInit {

  constructor(private pts:ProjectTeamService,private cm:CommonService) { }
  projectId:string=""
  userId:string=""
  ngOnInit(): void {
  }
  saveProjectTeam(){
    let projectTeam ={projectId:this.projectId}
    this.pts.addProjectTeam(projectTeam).subscribe(resp=>{
      console.log(resp);
      if(resp.status == 200){
        //navigate list role
        this.cm.tsService.success("",resp.msg,{
          timeOut:3000
        })
        this.cm.router.navigateByUrl("/listProjectTeam")
      }else{

      }
      
    })
  }
}
