import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

isLoggedIn = true;
  constructor() { }


  login(userName, password) {
    this.isLoggedIn = true;
  }

  logOut(){
        this.isLoggedIn = false;
  }

}
