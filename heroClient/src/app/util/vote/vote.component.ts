import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor() { }

  @Input() voteCount = 0;

  @Input() myVote:number = 0;

  @Output() vote = new EventEmitter();

  ngOnInit() {
  }
  onUpvoteClick(){
    console.log('Upvoted');
    if(this.myVote==1)return;

    this.myVote++;
    this.vote.emit({"myVote":this.myVote});
   
  }

  onDownvoteClick(){
    console.log('dwn voted');
       if(this.myVote==-1)return;
       this.myVote--;
       this.vote.emit({"myVote":this.myVote});
  }
}
