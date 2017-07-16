import { Component, OnInit } from '@angular/core';
import {GithubService} from './../services/github.service';
import {GitHubUser} from './../models/githubprofile';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  // user = new  GitHubUser() ;
  user = {};
  followers =  [];
  isLoading = false;

  gitForm: FormGroup;

  constructor( private _formBuilder: FormBuilder,private _githubService: GithubService) {
       this.gitForm = this._formBuilder.group({
      gitHubId: ['']
    });
   }

ngOnInit() {
//  this._githubService.getUsersAndFollowers('octocat').subscribe(res => {

//         this.user = res[0];
//         this.followers = res[1];
//         this.isLoading = false;
//       });
  }

  getUser(){
    console.log(this.gitForm.value.gitHubId);
    this.isLoading = true;
     this._githubService.getUsersAndFollowers(this.gitForm.value.gitHubId).subscribe(res => {

        this.user = res[0];
        this.followers = res[1];
        this.isLoading = false;
      });
  }

}
