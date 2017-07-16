import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Observable} from 'rxJs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import { SpotifyService } from './../services/spotify.service';
// import 'rxjs/Rx';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {

  spotifyForm: FormGroup;

  private results:string;

  constructor(private formBuilder: FormBuilder, private spotifyService: SpotifyService) {
    this.spotifyForm = this.formBuilder.group({
      artistName: ['']
    });
  


  const search = this.spotifyForm.get('artistName');
  var keyup = search.
  valueChanges.debounceTime(500)
  .distinctUntilChanged()
  .map(str	=>	(<string>str).replace(' ', "-"))
  .filter(text => text.length >= 4)
  .map(searchTerm => {
     return this.spotifyService.getHeroes(searchTerm).subscribe(res => {this.results = res[0].name});
  });

keyup.subscribe(res => {
  console.log(res);
 });


  }
  ngOnInit() {
  } 
}
