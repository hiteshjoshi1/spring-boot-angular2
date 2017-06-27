import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavoriteComponent} from './favorite/favorite.component';
import { HeartComponent } from './heart/heart.component';
import { VoteComponent } from './vote/vote.component';
import { TweetsComponent } from './tweets/tweets.component';
import {TweetService} from './../services/tweet.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FavoriteComponent, HeartComponent, VoteComponent, TweetsComponent],
  exports:[FavoriteComponent,HeartComponent,VoteComponent],
  providers: [TweetService],
})
export class UtilModule { }
