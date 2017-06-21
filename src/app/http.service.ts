import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HTTPService {

	constructor (private http: Http) {}
	private baseURL = "https://horizonpwr.firebaseio.com/"

	get(url): Promise<any[]>{
		return this.http.get(this.baseURL.concat(url).concat('.json'))
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

  post(url:string,data:any): Promise<any[]>{
    return this.http.post(this.baseURL.concat(url),data)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  put(url:string,data:any): Promise<any[]>{
    return this.http.put(this.baseURL.concat(url),data)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }


  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }  
}