import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../models/employee.service'

@Component({
  selector: 'employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrls: ['./employee-summary.component.css']
})
export class EmployeeSummaryComponent implements OnInit {

  constructor (private employeesService: EmployeesService) {}
  public employee = null;

  ngOnInit() {
  	this.getEmployees().then((res) => {
  		this.employee = res;
  	});
  }

  private getEmployees(){
  	return this.employeesService.getEmployees()
  }

}
