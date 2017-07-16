import { Component, OnInit } from '@angular/core';
import {CourseService} from './../services/course.service';
import {Course} from './../models/course';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval'; // note that this is an observable and not an operator

 
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
  constructor(private courseService: CourseService) {

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

// --- The functionality is not related to Onclick --
// mechanism to create a polling mechanism
// interval :- Emits ascending numbers, one every second (1000ms)
const	observable	=	Observable.interval(1000);

// Now use this to call our service , every 1000ms
observable.subscribe(y	=>	{
    // console.log(y);
    // the service is actually a forkJoin. internaly calling two services
    // the result is an observable
    const x = this.courseService.makeParallelCallsWithObservable();
    x.subscribe(val => {
      console.log(val[0]);
      console.log(val[1]);
    }, error => { 
      // do something if it errors out
      console.log(error);

    });
    //handling error by returning another observable or throwing an error
    // x.catch(error => {return 	Observable.of([1,	2,	3]); });
});
}

}
