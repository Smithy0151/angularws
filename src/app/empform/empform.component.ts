import {  Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Employee } from '../model/employee';
import { EmphttpService } from '../service/emphttp.service';

@Component({
  selector: 'app-empform',
  standalone: false,
  
  templateUrl: './empform.component.html',
  styleUrl: './empform.component.css'
})
export class EmpformComponent {
  emp:Employee;

  // constructor(private empservice: EmphttpService){
  //   this.emp = {eid: 1,ename: '',password: '', email: '',phone: '', address:{city:'',country: '',zipcode: 0}}
  // }

  constructor(private empservice: EmphttpService){
    this.emp = {eid: 1,ename: '',password: '', email: '',phone: '', address:{city:'',country: '',zipcode: 0}}
  }

  saveEmployee(){
    // this.empadded.emit(this.emp)
    // this.emp = {eid:0, ename:'',email:'',phone:'',password:'', address:{city:"", country:"", zipcode:0}}
    this.empservice.addEmployee(this.emp).subscribe(response => console.log(response))
  }

  @Output()
  empadded:EventEmitter<Employee> = new EventEmitter();


}
