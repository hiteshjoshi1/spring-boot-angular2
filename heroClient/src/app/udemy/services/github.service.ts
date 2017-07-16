import { Injectable } from '@angular/core';
import {GitHubUser} from './../models/githubprofile';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class GithubService {
private _base_uri = "https://api.github.com/users/";
  constructor(private _http: Http) { }

getUser(userId){
return this._http.get(this._base_uri+userId).map(res => res.json());
}
getFollowers(userId){
return this._http.get(this._base_uri+userId+'/followers').map(res => res.json());
}

getUsersAndFollowers(userId):Observable<any>{

const obsv1 = this.getUser(userId);

const obsv2 = this.getFollowers(userId);

 return Observable.forkJoin(obsv1, obsv2);

}

}
