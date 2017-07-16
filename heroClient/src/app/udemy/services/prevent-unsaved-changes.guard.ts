import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ContactFormComponent} from './../contact-form/contact-form.component';
import {FormGroup} from '@angular/forms';

@Injectable()
export class PreventUnsavedChangesGuard implements CanDeactivate<IformComponent> {
  
  canDeactivate(component: IformComponent){
    if(component.hasUnsavedChanges()){
      return confirm("Are you Sure");
    }
    else return true;

  }
}

export interface IformComponent {
  //Model driven form case
  // form: FormGroup;

// generic case

hasUnsavedChanges(): Boolean;

}