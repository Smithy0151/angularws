import {  Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-empform',
  standalone: false,
  
  templateUrl: './empform.component.html',
  styleUrl: './empform.component.css'
})
export class EmpformComponent {
  emp:Employee;

  constructor(){
    this.emp = {eid: 1,ename: '',password: '', email: '',phone: '', address:{city:'',country: '',zipcode: 0}}
  }

  saveEmployee(){
    this.empadded.emit(this.emp)
    this.emp = {eid:0, ename:'',email:'',phone:'',password:'', address:{city:"", country:"", zipcode:0}}

  }

  @Output()
  empadded:EventEmitter<Employee> = new EventEmitter();


}
