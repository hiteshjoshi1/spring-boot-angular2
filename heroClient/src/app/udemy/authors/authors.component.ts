import { Component, OnInit } from '@angular/core';
import {AuthorService} from './../services/author.service';
import {Author} from './../models/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors:Author[];
  post = {
    voteCount:10,
    myVote : 0,
    cost:100000,
    releaseDate: new Date()
    }


  constructor (authorService:AuthorService) {
    this.authors = authorService.getAuthors();
   }


  ngOnInit() {
  }

  onVote($event){
    console.log($event);
  }



}
