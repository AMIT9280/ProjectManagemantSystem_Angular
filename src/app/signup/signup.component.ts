import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName:string=""
  email:string=""
  password:string=""
  gender:string=""
  contactNum:string=""


  constructor(private sessionService:SessionService,private tsService:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.gender);
    console.log(this.contactNum);
    
    
    let user={firstName:this.firstName,email:this.email,password:this.password,role:"6219063da551ae3f022478fc"}
    this.sessionService.saveUser(user).subscribe(resp=>{
        console.log(resp);   
        if(resp.status == 200){

          this.tsService.success("",resp.msg,{timeOut:3000})
          this.router.navigateByUrl("/login")
          console.log(resp);
      }else{
          
          this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
  }
}
