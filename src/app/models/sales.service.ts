import { Injectable } from '@angular/core';
import { HTTPService } from '../http.service';


@Injectable()
export class SalesService {
	private salesEndpoint = 'sales';

	constructor (private http: HTTPService) {}

	getSales(): Promise<any> {
		return this.http.get(this.salesEndpoint)
			.then(this.onSuccess)
			.catch(this.onError);
	}

	createSale(sale): void {
		let url = this.salesEndpoint.concat("/" + sale.employeeId + ".json")
		this.http.post(url,sale)
			.then(this.onSuccess)
			.catch(this.onError);
	}

	private onSuccess(res: any){
		return res;
	}

	private onError(err: any){
		console.log(err);
	}


}