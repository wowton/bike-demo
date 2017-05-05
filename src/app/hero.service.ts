import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Hero } from './hero.model';

@Injectable()
export class HeroService{
	constructor(private http: Http){}

	private heroUrl = 'api/heroes';
	private headers = new Headers({'Content-Type':'application/json'});

	create(name: string): Promise<Hero>{
		return this.http
			.post(this.heroUrl, JSON.stringify({name:name}) ,{headers:this.headers})
			.toPromise()
			.then(response => response.json().data as Hero)
			.catch(this.handleError);
	}

	remove(id: number): Promise<void>{
		const url = `${this.heroUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	search(keyword: string): Observable<Hero[]>{
		const url = `${this.heroUrl}/?name=${keyword}`;
		return this.http.get(url)
			.map( res => res.json().data as Hero[]);
	}

	getHeroes(): Promise<Hero[]> {
		return  this.http.get(this.heroUrl)
								.toPromise()
								.then(response => response.json().data as Hero[])
								.catch(this.handleError);
	}

	getHero(id: number): Promise<Hero>{
		const url = `${this.heroUrl}/${id}`;
		return this.http.get(url)
					.toPromise()
					.then(response =>response.json().data as Hero);
	}

	update(hero: Hero): Promise<Hero>{
		const url = `${this.heroUrl}/${hero.id}`;
		return this.http
					.put(url, JSON.stringify(hero), {'headers':this.headers})
					.toPromise()
					.then(() => hero)
					.catch(this.handleError);
	}

	handleError(error:any): Promise<any>{
		console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
	}
}
