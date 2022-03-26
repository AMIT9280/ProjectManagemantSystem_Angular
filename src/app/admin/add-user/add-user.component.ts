import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private cm:CommonService,private userService:UserService) { }
  firstName:String=""
  email:String=""
  password:String=""
  gender:String=""
  contactNUm:String=""
  ngOnInit(): void {
  }
  saveUser(){
    let user={firstName:this.firstName,email:this.email,password:this.password,gender:this.gender,contactNUm:this.contactNUm}
    this.userService.addUser(user).subscribe(resp=>{
      console.log(resp);
      if(resp.status == 200){
        //navigate list role
        this.cm.tsService.success("",resp.msg,{timeOut:3000})
        this.cm.router.navigateByUrl("/listuser")
      }else{
      }
    })
  }
}
