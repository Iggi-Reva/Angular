import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:any;
  pass:any
  constructor() { }

  ngOnInit(): void {
  }
  register(Username:any,Password:any){

    this.name = localStorage.getItem("Username");
    this.pass = localStorage.getItem("Password");

    if ((this.name == Username) && (this.pass == Password)) {
      alert("logged in");
    }else{
      alert("Invalid");
    }
  }
}
