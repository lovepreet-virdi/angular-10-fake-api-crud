import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDataService } from './employee-data.service';



@NgModule({
  declarations: [EmployeeListComponent],
  providers:[EmployeeDataService],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeesModule { }
