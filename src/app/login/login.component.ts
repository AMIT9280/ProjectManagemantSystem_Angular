import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string="";
  password:String="";

  constructor(private sessionService:SessionService,private tsService:ToastrService,private router:Router ) { }

  ngOnInit(): void {
  }
  
  login(){
    let user = {email:this.email,password:this.password}
    console.log(user);
    
    this.sessionService.authenticate(user).subscribe(resp=>{
      if(resp.status == 200){

          this.tsService.success("",resp.msg,{timeOut:3000})
          localStorage.setItem("firstName",resp.data.firstName)
          this.router.navigateByUrl("/admin/adminDashboard")
          console.log(resp);
      }else{
          
          this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
  }
}
