import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.firstName=localStorage.getItem("firstName") as string
  }
  firstName:string=""

}
