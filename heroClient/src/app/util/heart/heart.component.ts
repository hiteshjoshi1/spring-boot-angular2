import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {

@Input() likes:number = 0;
clicked:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  onHeartClick(){
    this.clicked = !this.clicked; 
    this.likes += this.clicked ? 1:-1;
    
  }

}
