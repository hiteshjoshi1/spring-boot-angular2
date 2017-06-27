import { Injectable } from '@angular/core';
import {Tweet} from './../models/tweet';

@Injectable()
export class TweetService {

constructor() { }

getAllTweets():Tweet[] {
return  [{tweetId: 1,
  authorName: "Hitesh",
  authorHandle:"@joshiji",
  tweetMesg:"Start from basics, be a honest, clear headed and disciplined person first ",
  numLikes:1000,
  tweetImgUrl:"http://lorempixel.com/100/100/people?1" 
  },
  {
    tweetId: 2,
  authorName: "Deepika",
  authorHandle:"@dips",
  tweetMesg:"Then learn the basics of your trade, from typing to Problem Solving. Master them slowly",
  numLikes:900,
  tweetImgUrl:"http://lorempixel.com/100/100/people?2"
},
  {
    tweetId: 1,
  authorName: "Viktor Frankl",
  authorHandle:"@viklogos",
  tweetMesg:"Learn to live a happier and fuller life, do what you feel right in the long term and make aligned choices in the short term. Build your life and career consciously ",
  numLikes:10000,
  tweetImgUrl:"http://lorempixel.com/100/100/people?4"}];
}  

}
