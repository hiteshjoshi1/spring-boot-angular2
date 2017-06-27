import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './../dashboard/dashboard.component';
import { HeroesComponent }      from './../heroes/heroes.component';
import { HeroDetailComponent }  from './../hero-detail/hero-detail.component';
import {CoursesComponent} from './../udemy/courses/courses.component';
import {TweetsComponent} from './../util/tweets/tweets.component';
import {AuthorsComponent} from './../udemy/authors/authors.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'courses',    component: CoursesComponent },
  { path: 'tweets',     component: TweetsComponent },
  { path: 'authors',    component:AuthorsComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
