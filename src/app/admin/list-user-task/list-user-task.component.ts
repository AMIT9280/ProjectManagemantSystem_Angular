import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserTaskService } from '../user-task.service';

@Component({
  selector: 'app-list-user-task',
  templateUrl: './list-user-task.component.html',
  styleUrls: ['./list-user-task.component.css']
})
export class ListUserTaskComponent implements OnInit {
  UserTask:Array<any> = []
  constructor(private uts:UserTaskService,private cm:CommonService) { }

  ngOnInit(): void {
    this.getAllUserTask()
  }
  deleteUserTask(UserTaskId:any){
    this.uts.deleteUserTask(UserTaskId).subscribe(resp=>{
      if(resp.status == 200 ){
          this.cm.tsService.success("",resp.msg,{timeOut:3000});
          this.getAllUserTask() 
      }else{
        this.cm.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
}

editUserTask(UserTaskId:any){
this.cm.router.navigateByUrl("/editUserTask/"+UserTaskId)

}

getAllUserTask(){
this.uts.getAllUserTask().subscribe(resp=>{
  console.log(resp);
   this.UserTask =  resp.data 
  }) 
}

}
