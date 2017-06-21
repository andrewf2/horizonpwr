import { Component, OnInit, Input } from '@angular/core';
import { SalesService } from '../models/sales.service';


@Component({
  selector: 'commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.css']
})
export class CommissionsComponent implements OnInit {
  private sales:any;

  constructor(private salesService:SalesService) { }

  @Input() employee:any;

  ngOnInit() {
  	this.salesService.getSales(this.employee['id'])
  		.then(sales => this.sales = sales);
  }

  getTotalExpenses(sale){
  	return parseFloat(sale.jobExpense) + parseFloat(sale.fieldMarketerPayAmount);
  }

  getTotalCommission(sale) {
    let beforeExpenses =  parseFloat(this.employee['earnedRate']) * parseFloat(sale.kwTotal);
    let afterExpenses = beforeExpenses - this.getTotalExpenses(sale);
    return afterExpenses;
  }

}
