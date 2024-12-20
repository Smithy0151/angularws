import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmpformComponent } from './empform/empform.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';

const routes: Routes = [
  {path:'' ,redirectTo:'employees',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'add', component: EmpformComponent },
  {path: 'login', component: LoginComponent},
  {path:'employees/:id', component:ProfileComponent,
    children:[
    {path:'detail', component:ProfiledetailComponent}
    ]},
  {path:'**',component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
