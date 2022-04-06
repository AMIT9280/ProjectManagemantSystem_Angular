import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.css']
})
export class ListStatusComponent implements OnInit {
  status:Array<any> = []
  constructor(private ss:StatusService,private cm:CommonService) { }
  ngOnInit(): void {
    this.getAllStatus()
  }
  deleteStatus(statusId:any){
    this.ss.deleteStatus(statusId).subscribe(resp=>{
      if(resp.status == 200 ){
          this.cm.tsService.success("",resp.msg,{timeOut:3000});
          this.getAllStatus() 
      }else{
        this.cm.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
}

editStatus(statusId:any){
this.cm.router.navigateByUrl("/editstatus/"+statusId)

}

getAllStatus(){
this.ss.getAllStatus().subscribe(resp=>{
 if (resp.status == -1) {
        this.cm.tsService.error(resp.msg, "", { timeOut: 3000 })
      }
      else {
        this.cm.tsService.success(resp.msg, "", { timeOut: 3000 })
        this.status = resp.data
        console.log("------------");
        
        console.log(this.status);
      }
  }) 
}


}

