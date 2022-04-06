import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserTaskService } from '../user-task.service';

@Component({
  selector: 'app-add-user-task',
  templateUrl: './add-user-task.component.html',
  styleUrls: ['./add-user-task.component.css']
})
export class AddUserTaskComponent implements OnInit {

  constructor(private uts:UserTaskService,private cm:CommonService) { }
  userId:string=""
  taskId:string=""
  Status:string=""
  ngOnInit(): void {
  }
  saveUserTask(){
    let UserTask ={userId:this.userId,taskId:this.taskId,Status:this.Status}
    this.uts.addUserTask(UserTask).subscribe(resp=>{
      console.log(resp);
      if(resp.status == 200){
        //navigate list role
        this.cm.tsService.success("",resp.msg,{
          timeOut:3000
        })
        this.cm.router.navigateByUrl("/getAllUserTask")
      }else{

      }
      
    })
  }
}
