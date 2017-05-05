import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { BikeService } from './bike.service';

@NgModule({
  imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule
	],
  declarations: [
		AppComponent,
		DashboardComponent,
		HeroDetailComponent,
		HeroSearchComponent
	],
	providers: [
		BikeService
	],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
