import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users:Array<any> = []
  constructor(private userService:UserService,private cm:CommonService) { 
    console.log("List Users");
  }
  ngOnInit(): void {
      this.getAllUsers()
  }
  deleteUsers(userId:any){
    this.userService.deleteUser(userId).subscribe(resp=>{
      if(resp.status == 200 ){
          this.cm.tsService.success("",resp.msg,{timeOut:3000});
          this.getAllUsers() 
      }else{
        this.cm.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
}

editUsers(userId:any){
this.cm.router.navigateByUrl("/edituser/"+userId)

}

getAllUsers(){
this.userService.getAllUsers().subscribe(resp=>{
  console.log(resp);
   this.users =  resp.data 
  }) 
}

}
