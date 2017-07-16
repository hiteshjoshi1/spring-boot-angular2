import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import component here
import { AppComponent }  from './app.component';
// for ngModel
import { FormsModule }   from '@angular/forms';
import { HttpModule,JsonpModule }    from '@angular/http';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//Creating a Singleton service by adding the service as provider to app module
import { HeroService } from './services/hero.service';
import {AuthService} from './services/auth.service';
import {UdemyModule} from './udemy/udemy.module';
import {UtilModule} from './util/util.module';

//Routing

// Seprating it to its own file - Udemy Module is a child route
import {UdemyRoutingModule} from './udemy/udemy.routing';
// Main Routing file
import { AppRoutingModule } from './app-routing/app-routing.module';

import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { SummarizePipe } from './util/summarize.pipe';




// This is actually an Annotation for the AppModule Class
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  UdemyRoutingModule,
                  AppRoutingModule,
                  HttpModule,
                  UdemyModule,
                  JsonpModule,
                  UtilModule,
                  ReactiveFormsModule
                 ],
  // add components here
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent,
  DashboardComponent,
  SignupComponent
   ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService, AuthService],

})
export class AppModule {
 }
