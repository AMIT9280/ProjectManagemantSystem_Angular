import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public tsService:ToastrService,public router:Router) { }
}
