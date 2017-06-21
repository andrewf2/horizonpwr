import { Injectable } from '@angular/core';
import { HTTPService } from '../http.service';
import { commissionService } from '../commissions/commission.service';


@Injectable()
export class SalesService {
	private salesEndpoint = 'sales';

	constructor (private http: HTTPService) {}

	getSales(id): Promise<any> {
		return this.http.get(this.salesEndpoint + '/' + id)
			.then(this.onSuccess)
			.catch(this.onError);
	}

	createSale(sale): void {
		let url = this.salesEndpoint.concat("/" + sale.employeeId)
		this.http.post(url,sale)
			.then(this.onSuccess)
			.catch(this.onError);
	}

	private onSuccess(res: any){
		return commissionService.formatSales(res);
	}

	private onError(err: any){
		console.log(err);
	}


}