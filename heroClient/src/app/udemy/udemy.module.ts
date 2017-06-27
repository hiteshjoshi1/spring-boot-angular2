import { NgModule } from              '@angular/core';
import { CommonModule } from          '@angular/common';
import { FormsModule } from           '@angular/forms';
import { CoursesComponent } from      './courses/courses.component';
import { CourseService } from         './services/course.service';
import { AuthorsComponent } from      './authors/authors.component';
import { AuthorService } from         './services/author.service';
import { AutoGrowDirective } from     './auto-grow.directive';
import { UtilModule } from            './../util/util.module';



@NgModule({
  imports: [
    CommonModule,FormsModule,UtilModule
  ],
    declarations: [CoursesComponent, AuthorsComponent,AutoGrowDirective],
    providers: [CourseService, AuthorService],
    exports: [AuthorsComponent, AutoGrowDirective]
})
export class UdemyModule { }
