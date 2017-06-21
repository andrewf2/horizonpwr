import { Injectable } from '@angular/core';
import { HTTPService } from '../http.service';
import { User } from './user';


@Injectable()
export class EmployeesService {
	private employeeEndpoint = 'employee';

	constructor (private http: HTTPService) {}

	public getEmployees(): Promise<any> {
		return this.http.get(this.employeeEndpoint)
			.then(this.onSuccess)
			.catch(this.onError);
	}
	public getEmployee(id:string): Promise<any> {
		return this.http.get(this.employeeEndpoint + "/" +id)
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

	public createUser(data): Promise<any> {
		let user = {};
		user['username'] = data.id;
		user['password'] = data.password;
		return this.http.put('user/' + data.id+'.json', user)
	}

	public login(user:User) : Promise<any> {
		return this.http.get('user/' + user.username)
			.then(fetchedUser => {
				if(fetchedUser['username'] != undefined){
					if(user.password !== fetchedUser['password']){
						throw "bad password";
					} else {
						return fetchedUser;
					} 					
				} else {
					throw "no User";
				}

			})
			.catch(e => e);
	}
}