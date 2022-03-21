import { Component, OnInit } from '@angular/core';
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


  constructor(private sessionService:SessionService) { }

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
        
    })
  }
}
