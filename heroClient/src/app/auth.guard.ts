import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './udemy/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(private _authService: AuthService, private _router:Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   Observable<boolean> | Promise<boolean> | boolean {
         console.log('AuthGuard#canActivate called');
         if(this._authService.isLoggedIn) {
           return true;
         }
         this._router.navigate(['dashboard']);
    return false;
  }
}
