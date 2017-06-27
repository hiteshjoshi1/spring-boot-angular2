import { Component, OnInit } from '@angular/core';
import {CourseService} from './../services/course.service';
import {Course} from './../models/course';
 
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  viewMode = 'map';

isActive = false; 
title:String = "Demonstrating Two Way Binding";
courses : Course [];
  constructor(courseService:CourseService) {

    this.courses = courseService.getCourses();
   }

  ngOnInit() {
  }

  onLike(courseLiked:number){
      this.courses[courseLiked].clicked = !this.courses[courseLiked].clicked;
  }

// explicit 2 way binding
onType($event){
  this.title= $event.target.value;
}

onClick(clicked){
this.viewMode = clicked;
}

}
