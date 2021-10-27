import { Component, OnInit } from '@angular/core';
import { AervicedemoService } from '../aervicedemo.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  constructor(private ccc:AervicedemoService) { }

  ngOnInit(): void {
  }
  // cde(){
  //   this.ccc.dblogic();
  // }
}
