import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  selectedRow = null;

  constructor(public ds: EmployeeDataService, public router: Router) { }

  ngOnInit(): void {
    this.ds.getPosts().subscribe(data => {
      this.employees = data;
    });
  }

  handleSeeDetials(i: number): void {

    this.selectedRow = this.employees[i];
  }
  handleEdit(event: Event, empId: number): void {

    event.preventDefault();
    this.router.navigate(['employee/edit', empId])

  }


}
