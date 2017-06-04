import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesService } from '../models/sales.service';

@Component({
  selector: 'add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})

export class AddSaleComponent implements OnInit {

  constructor(private salesService: SalesService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
  	console.log(f.value);
  	this.salesService.createSale(f.value);
  	//this.router.navigate(['/add',"employee"]);

  }
}
