import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmphttpService } from '../service/emphttp.service';

@Component({
  selector: 'app-profile',
  standalone: false,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  employee:Employee;
  // name: string = 'NA';
  // email: string = 'NA';

  constructor(private route: ActivatedRoute, private es:EmphttpService, private router:Router) {
    this.employee = {eid:0,ename:"",phone:"",email:"",password:"",address:{country:""}}
  }

  displayAddress(){
    this.router.navigate(['detail'],{relativeTo:this.route})
  }


  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   this.name = params['name'];
    //   this.email = params['email'];
    // });
    this.route.params.subscribe(data => {
      console.log(data['id'])
      this.employee.eid = data['id']
      this.es.getEmployeeById(data['id'])
      .subscribe(emp => this.employee = emp);
      })

      
  }
}
