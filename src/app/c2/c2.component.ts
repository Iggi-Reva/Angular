import { Component, OnInit } from '@angular/core';
import { AervicedemoService } from '../aervicedemo.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private bbb:AervicedemoService) { }

  ngOnInit(): void {
  }
  servname=''
  
  xyz(){
    this.servname = this.bbb.name;
  }
}
