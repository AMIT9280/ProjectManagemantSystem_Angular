import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private ts:TaskService,private cm:CommonService) { }
  moduleId:string=""
  projectId:string=""
  title:string=""
  priority:string=""
  description:string=""
  statusId:string=""
  totalMinutes:string=""
  ngOnInit(): void {
  }
  saveTask(){
    let Task ={totalMinutes:this.totalMinutes,statusId:this.statusId,description:this.description,moduleId:this.moduleId,projectId:this.projectId,title:this.title,priority:this.priority,}
    this.ts.addTask(Task).subscribe(resp=>{
      console.log(resp);
      if(resp.status == 200){
        //navigate list role
        this.cm.tsService.success("",resp.msg,{
          timeOut:3000
        })
        this.cm.router.navigateByUrl("/getAllTask")
      }else{

      }
      
    })
  }
}
