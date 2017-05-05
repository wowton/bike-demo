import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Bike } from './bike.model';

@Injectable()
export class BikeService{
	constructor(private http:Http){}

	private bikeUrl = 'api/heroes';
	private headers = new Headers({'Content-Type':'application/json'});

	//搜索
	search(keyword:string): Observable<Bike[]>{
		const url = `${this.bikeUrl}/?num=${keyword}`;
		return this.http.get(url)
			.map(res => res.json().data as Bike[]);
	}

	getBike(id: number): Promise<Bike>{
		const url = `${this.bikeUrl}/${id}`;
		return this.http.get(url)
			.toPromise().then(res => res.json().data as Bike);
	}
}
