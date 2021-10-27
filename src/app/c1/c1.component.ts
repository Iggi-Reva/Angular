import { Component, OnInit } from '@angular/core';
import { AervicedemoService } from '../aervicedemo.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private dbl:AervicedemoService) { }

  ngOnInit(): void {
  }
  abc(myname:any){
    
    this.dbl.dblogic(myname);
  }
}
