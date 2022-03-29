import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ProjectTeamService } from '../project-team.service';

@Component({
  selector: 'app-list-project-team',
  templateUrl: './list-project-team.component.html',
  styleUrls: ['./list-project-team.component.css']
})
export class ListProjectTeamComponent implements OnInit {
  projectTeam: Array<any> = []
  constructor(private cm: CommonService, private projectTeamService: ProjectTeamService) {
    console.log("Project-Team List");
  }

  ngOnInit(): void {
    this.getAllprojectTeamMemberBy()
  }
  deleteProjectTeam(projectTeamId: any) {
    this.projectTeamService.deleteProjectTeam(projectTeamId).subscribe(resp => {
      if (resp.status == 200) {
        this.cm.tsService.success("", resp.msg, { timeOut: 3000 });
        this.getAllprojectTeamMemberBy()
      } else {
        this.cm.tsService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  editProjectTeam(projectTeamId: any) {
    this.cm.router.navigateByUrl("/editprojectTeam/" + projectTeamId)
  }

  getAllprojectTeamMemberBy() {
    this.projectTeamService.getAllProjectTeam().subscribe(resp => {
      if (resp.status == -1) {
        this.cm.tsService.error(resp.msg, "", { timeOut: 3000 })
      }
      else {
        this.cm.tsService.success(resp.msg, "", { timeOut: 3000 })
        this.projectTeam = resp.data
        console.log(this.projectTeam);
      }
    })
  }

}
