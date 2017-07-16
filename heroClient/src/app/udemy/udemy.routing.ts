import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CoursesComponent } from './../udemy/courses/courses.component';
import { TweetsComponent } from './../util/tweets/tweets.component';
import { AuthorsComponent } from './../udemy/authors/authors.component';
import { ContactFormComponent } from './../udemy/contact-form/contact-form.component';

import { ChangePasswordComponent } from './../udemy/change-password/change-password.component';
import { SpotifyComponent } from './../udemy/spotify/spotify.component';
import { GithubProfileComponent } from './../udemy/github-profile/github-profile.component';
import { AuthGuard } from './../auth.guard';
import { PreventUnsavedChangesGuard } from './services/prevent-unsaved-changes.guard';

// Create a Route Array
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'contact', component: ContactFormComponent,
                     canDeactivate: [PreventUnsavedChangesGuard]},
  { path: 'changePwd', component: ChangePasswordComponent,
                     canDeactivate: [PreventUnsavedChangesGuard]  },
  { path: 'spotify', component: SpotifyComponent, canActivate: [AuthGuard] },
  { path: 'tweets', component: TweetsComponent },
  { path: 'github', component: GithubProfileComponent }
];

// Router.forRoot returns a main Module only
// for Child we need to use forChild
@NgModule({
  // because these route is a child
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UdemyRoutingModule { }
