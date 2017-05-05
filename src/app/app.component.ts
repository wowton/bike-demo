import { Component } from '@angular/core';

import 'bootstrap';
import '../assets/css/styles.css';

@Component({
	selector:'my-app',
	template:`
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">DashBoard</a>
			<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.css']
})
export class AppComponent{
	title = 'My Bike';
}
