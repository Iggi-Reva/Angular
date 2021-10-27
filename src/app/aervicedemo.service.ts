import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AervicedemoService {

  constructor() { }
  name=''
  dblogic(myname:any){
    this.name = myname;
    console.log("Name is :" + this.name);
  }
}
