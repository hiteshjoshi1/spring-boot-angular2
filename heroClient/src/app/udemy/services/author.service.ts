import { Injectable } from '@angular/core';
import {Author}       from './../models/author';

@Injectable()
export class AuthorService {

  constructor() { }

  public getAuthors():Author[]{
    return  [ 
      {
      id:0,
      name:"Jason Bourne",
      isPublished:false,
      publishedReasearcName:null
      },
      {
      id:1,
      name:"Aaron Swartz",
      isPublished:true,
      publishedReasearcName:"RSS Spec"
      },
      {
      id:2,
      name:"Dijkistra",
      isPublished:true,
      publishedReasearcName:"MST Algo"
      }
      ];
  }
}
