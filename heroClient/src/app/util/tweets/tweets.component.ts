import { Component, OnInit } from '@angular/core';
import { TweetService } from "./../../services/tweet.service";
import { Tweet } from "./../../models/tweet";


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  constructor(private _tweetService:TweetService) { }

  ngOnInit() {
    this.getAllTweets();
  }

  tweets : Tweet[];

  getAllTweets(){
  this.tweets = this._tweetService.getAllTweets();
  }

}
