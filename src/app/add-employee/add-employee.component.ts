import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from '../models/employee.service';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
  	console.log(f.value);
  	this.employeeService.createEmployee(f.value);
  	//this.router.navigate(['/add',"employee"]);

  }
}
