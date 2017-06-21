import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { EmployeesService } from '../models/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: EmployeesService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
  	let user = new User(f.value.username,f.value.password);
  	this.service.login(user)
  		.then(user => {
  			if(user['role'] == 'admin'){
  				this.router.navigate(['/add',"employee"])
  			} else {
  				this.router.navigate(['/commissions',user.username])
  			}
  		})
  		.catch(e => console.log('err',e));
  }
}
