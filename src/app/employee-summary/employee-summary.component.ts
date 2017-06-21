import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../models/employee.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SalesService } from '../models/sales.service';
import 'rxjs';

@Component({
  selector: 'employee-summary',
  templateUrl: './employee-summary.component.html'
})
export class EmployeeSummaryComponent implements OnInit {

  constructor (private employeesService: EmployeesService, private router: Router,private route: ActivatedRoute, private salesService:SalesService) {}
  public employee:any;
  private sales:any;

  ngOnInit() {
    return this.route.params
      .map((params: Params) => {
        return params['id'];
      }).subscribe((id) => {
        this.getEmployee(id).then((res) => {
          this.employee = res;
              this.salesService.getSales(this.employee['id'])
      .then(sales => this.sales = sales);
        });        
      });


  }

  private getEmployee(id){
    console.log(id)
  	return this.employeesService.getEmployee(id)
  }

  getPendingCommissionTotal() {
    let total = 0;
    let kwTotal = 0;
    let pendingSales = this.sales.filter(sale => {
      let now = new Date();
      let isPending = (new Date(sale.payDate) > now);
      return isPending;
    });

    pendingSales.forEach(sale => {
      kwTotal += sale.kwTotal;
    });

    return this.employee.earnedRate * kwTotal;
  }

}
