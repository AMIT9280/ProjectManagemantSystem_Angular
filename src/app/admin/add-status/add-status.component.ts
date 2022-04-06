import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {

  constructor(private ss:StatusService,private cm:CommonService) { }
  statusName:string=""
  projectTeamId:string=""
  ngOnInit(): void {
  }
  saveStatus(){
    let Status ={statusName:this.statusName,projectTeamId:this.projectTeamId}
    this.ss.addStatus(Status).subscribe(resp=>{
      console.log(resp);
      if(resp.status == 200){
        //navigate list role
        this.cm.tsService.success("",resp.msg,{
          timeOut:3000
        })
        this.cm.router.navigateByUrl("/getAllStatus")
      }else{

      }
      
    })
  }
}
