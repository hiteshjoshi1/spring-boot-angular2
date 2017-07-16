import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { HeroesComponent } from './../heroes/heroes.component';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { SignupComponent } from './../signup/signup.component';

// Create a Route Array
const routes: Routes = 
[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path : 'signup', component: SignupComponent}
];

// Router.forRoot returns a module
// we create it and then export the same
@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
