import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  task:Array<any> = []
  constructor(private ts:TaskService,private cm:CommonService) { }

  ngOnInit(): void {
    this.getAllTask() 
  }
 deleteTask(taskId:any){
    this.ts.deleteTask(taskId).subscribe(resp=>{
      if(resp.status == 200 ){
          this.cm.tsService.success("",resp.msg,{timeOut:3000});
          this.getAllTask() 
      }else{
        this.cm.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
}

editTask(taskId:any){
this.cm.router.navigateByUrl("/edittask/"+taskId)

}

getAllTask(){
this.ts.getAllTask().subscribe(resp=>{
  console.log(resp);
   this.task =  resp.data 
  }) 
}
}
