import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  message:string ;
  constructor() { 
   this.message = 'Travis Scott';
   console.log('demo service')
  }
   setMessage(msg:string){
   this.message = msg
   }
}
