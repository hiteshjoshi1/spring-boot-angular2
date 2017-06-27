import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

@Input() isFavorite = false;

@Output() evntEmitted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
onFavorite(){
this.isFavorite= !this.isFavorite;
this.evntEmitted.emit({newValue : this.isFavorite});
}



}
