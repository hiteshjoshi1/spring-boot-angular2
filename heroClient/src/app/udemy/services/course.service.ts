import { Injectable } from '@angular/core';
import {Course} from './../models/course';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/delay';  

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


testObservable1(x:number): Observable<number>{
return  Observable.of(x++);
}


makeParallelCallsWithObservable():Observable<any>{

// call to userData service
var userDataCall = Observable.of({"userId":1, "userName":'mosh'}).delay(2000);

var tweetCall = Observable.of([1, 2, 3, 4]).delay(1500);

 return Observable.forkJoin(userDataCall, tweetCall);
}
}
