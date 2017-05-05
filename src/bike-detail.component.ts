import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Bike } from './bike.model';
import { BikeService } from './bike.service';

@Component({
	selector: 'bike-detail',
	templateUrl: './bike-detail.component.html'
})

export class BikeComponent implements OnInit{
	constructor(
		private bikeService: BikeService,
		private route: ActivatedRoute,
		private location: Location
	){}

	@Input() bike: Bike;

	ngOnInit():void{
		this.route.params
		.switchMap((params:Params) =>
			this.bikeService.getBike(+params['id'])
		)
		.subscribe(bike => this.bike = bike)
	}

}
