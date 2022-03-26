import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private sessionService:SessionService,private cm:CommonService) { }
  email:string=""
  ngOnInit(): void {
  }
  recoverPassword(){
    //alert(this.email)
    let user = {email:this.email}
    this.sessionService.sendOtpForPassword(user).subscribe(resp=>{

      if(resp.status==-1){
        this.cm.tsService.error("",resp.msg,{timeOut:3000})
      }else{
        this.cm.tsService.success("",resp.msg,{timeOut:3000})
        this.cm.router.navigateByUrl("/changepassword")
      }
    })
  }

}
