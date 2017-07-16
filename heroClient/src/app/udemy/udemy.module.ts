import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './services/course.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './services/author.service';
import { SpotifyService } from './services/spotify.service';
import { GithubService } from './services/github.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { UtilModule } from './../util/util.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpotifyComponent } from './spotify/spotify.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { AuthGuard } from './../auth.guard';
import { AuthService } from './services/auth.service';
import { PreventUnsavedChangesGuard } from './services/prevent-unsaved-changes.guard';



@NgModule({
  imports: [
    CommonModule, FormsModule, UtilModule, ReactiveFormsModule
  ],
  declarations: [
                CoursesComponent, ContactFormComponent,
                AuthorsComponent, AutoGrowDirective,
                ChangePasswordComponent, SpotifyComponent,
                GithubProfileComponent
                 ],
  providers: [
              CourseService, AuthorService, SpotifyService,
              GithubService, AuthGuard, AuthService, PreventUnsavedChangesGuard
              ],
  exports: [
            AuthorsComponent, AutoGrowDirective, ContactFormComponent
            ]
})
export class UdemyModule { }
