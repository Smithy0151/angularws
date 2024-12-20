import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { employees } from '../model/data';
import { Employee } from '../model/employee';
import { EmphttpService } from '../service/emphttp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: false,

  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnChanges{
  employees = employees;
  showEditForm:boolean = false;

  constructor(private empservice:EmphttpService, private router:Router, private route:ActivatedRoute){}


  @Input()
  newemp:any={}

  ngOnInit(): void {
    this.empservice.getAllEmployees()
    .subscribe(resp => {
    console.log('fetched employees')
    console.log(resp);
    this.employees = resp;
    })
    }
   

ngOnChanges(changes: SimpleChanges): void {
 console.log(this.newemp)
 if(this.newemp !== undefined)
 this.employees.unshift(this.newemp)
 }

 delete(emp:Employee){
  this.empservice.deleteEmployee(emp.eid).subscribe(response => console.log(response))

//  let objindx = this.employees.findIndex(employee=>employee.eid === emp.eid);
//  this.employees.splice(objindx,1)
 }

 edit(emp:Employee){
  console.log(emp);
 }

 viewProfile(id:number)
 {
  this.router.navigate([id], {relativeTo:this.route})
 }


 


}
