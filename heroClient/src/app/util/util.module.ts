import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavoriteComponent} from './favorite/favorite.component';
import { HeartComponent } from './heart/heart.component';
import { VoteComponent } from './vote/vote.component';
import { TweetsComponent } from './tweets/tweets.component';
import {TweetService} from './../services/tweet.service';
import {SummarizePipe} from './summarize.pipe';
import { BootStrapPanelsComponent } from './bs-panels/bs-panels.component';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FavoriteComponent, HeartComponent, VoteComponent, TweetsComponent,
  SummarizePipe,BootStrapPanelsComponent, ZippyComponent],
  exports:[FavoriteComponent,HeartComponent,VoteComponent,SummarizePipe,
  BootStrapPanelsComponent,ZippyComponent],
  providers: [TweetService],
})
export class UtilModule { }
