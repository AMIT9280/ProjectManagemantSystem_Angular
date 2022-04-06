import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ProjectModuleService } from '../project-module.service';

@Component({
  selector: 'app-list-project-module',
  templateUrl: './list-project-module.component.html',
  styleUrls: ['./list-project-module.component.css']
})
export class ListProjectModuleComponent implements OnInit {
projectMOdule: Array<any> = []
  constructor(private pms:ProjectModuleService,private cm:CommonService) { }

  ngOnInit(): void {
    this.getAllProjectMOduleMemberBy()
  }
  deleteProjectMOdule(projectMOduleId: any) {
    this.pms.deleteProjectMOdule(projectMOduleId).subscribe(resp => {
      if (resp.status == 200) {
        this.cm.tsService.success("", resp.msg, { timeOut: 3000 });
        this.getAllProjectMOduleMemberBy()
      } else {
        this.cm.tsService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  editProjectMOdule(projectMOduleId: any) {
    this.cm.router.navigateByUrl("/editprojectMOdule/" + projectMOduleId)
  }

  getAllProjectMOduleMemberBy() {
    this.pms.getAllProjectMOdule().subscribe(resp => {
      if (resp.status == -1) {
        this.cm.tsService.error(resp.msg, "", { timeOut: 3000 })
      }
      else {
        this.cm.tsService.success(resp.msg, "", { timeOut: 3000 })
        this.projectMOdule = resp.data
        console.log("------------");
        
        console.log(this.projectMOdule);
      }
    })
  }

}
