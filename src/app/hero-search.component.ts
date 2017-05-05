import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Component({
	selector: 'hero-search',
	templateUrl: './hero-search.component.html',
	styleUrls: ['./hero-search.component.css']
})

export class HeroSearchComponent implements OnInit{
	constructor(
		private heroService: HeroService,
		private router: Router
	){}

	heroes: Observable<Hero[]>;
	private searchTerms = new Subject<string>();

	search(term: string){
		this.searchTerms.next(term);
	}

	ngOnInit(): void{
		this.heroes = this.searchTerms
		.debounceTime(300)        // wait 300ms after each keystroke before considering the term
		.distinctUntilChanged()   // ignore if next search term is same as previous
		.switchMap(term => term   // switch to new observable each time the term changes
			// return the http search observable
			? this.heroService.search(term)
			// or the observable of empty heroes if there was no search term
			: Observable.of<Hero[]>([]))
		.catch(error => {
			// TODO: add real error handling
			console.log(error);
			return Observable.of<Hero[]>([]);
		});
	}

	gotoDetail(hero: Hero): void{
		this.router.navigate(['/detail', hero.id]);
	}
}
