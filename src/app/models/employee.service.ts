import { Injectable } from '@angular/core';
import { HTTPService } from '../http.service';


@Injectable()
export class EmployeesService {
	private employeeEndpoint = 'employee/keithleonard823471.json';

	constructor (private http: HTTPService) {}

	public getEmployees(): Promise<any> {
		return this.http.get(this.employeeEndpoint)
			.then(this.onSuccess)
			.catch(this.onError);
	}

	private onSuccess(res: any){
		console.log(res);
		return res;
	}

	private onError(err: any){
		return err;
	}

	public createEmployee(data): Promise<any>{
		return this.http.put('employee/'+data.id+'.json',data);
	}
}