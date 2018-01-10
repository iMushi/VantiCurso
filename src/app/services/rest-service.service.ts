import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class RestServiceService {

	url = 'https://jsonplaceholder.typicode.com/posts';

	constructor(
		private _http: HttpClient
	) {}

	getPosts() {
		return this._http.get(this.url);
	}

	doPost() {

		const params: HttpParams = new HttpParams()
			.append('unId' , '123')
			.append('texto' , 'Hola Post');

		return this._http.post(this.url, params);
	}

}
