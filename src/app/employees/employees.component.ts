import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { employees } from '../model/data';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employees',
  standalone: false,

  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnChanges{
  employees = employees;
  showEditForm:boolean = false;

  @Input()
  newemp:any={}

ngOnChanges(changes: SimpleChanges): void {
 console.log(this.newemp)
 if(this.newemp !== undefined)
 this.employees.unshift(this.newemp)
 }

 delete(emp:Employee){
 let objindx = this.employees.findIndex(employee=>employee.eid === emp.eid);
 this.employees.splice(objindx,1)
 }

 edit(emp:Employee){
  console.log(emp);
 }


}
