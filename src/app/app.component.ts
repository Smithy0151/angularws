import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DemoService } from './service/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(public service:DemoService){}


  showEmpForm: boolean = false;

  toggleEmpForm(){
    this.showEmpForm = !this.showEmpForm;
  }

  newemp:any;
  newEmpAdded(newemp:any){
  console.log(newemp)
  this.newemp = newemp;
  this.showEmpForm = !this.showEmpForm;
 }

}
