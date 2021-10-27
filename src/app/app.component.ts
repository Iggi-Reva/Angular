import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Register';

  mydata="";

  login(Name:any,Email:any,Phone:any,Password:any){
    localStorage.setItem("Username",Name);
    localStorage.setItem("Email",Email);
    localStorage.setItem("Phone",Phone);
    localStorage.setItem("Password",Password);
    console.log(Name+ "" +Password);
  }

  constructor(private router:Router){}

  reg(){
    this.router.navigateByUrl('login')
  }
}
