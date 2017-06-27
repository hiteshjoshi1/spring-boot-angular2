import { Injectable } from '@angular/core';
import {Course} from './../models/course';

@Injectable()
export class CourseService {

  constructor() { }

  getCourses():Course[]{

    return [
      {id:0,name:"Emotional Intelligence",clicked:false},
      {id:1,name:"Health",clicked:false},
      {id:2,name:"Data Structures",clicked:false},
      {id:3,name:"Algorithms",clicked:false}
      ];
  }

}
