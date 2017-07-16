import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, CanActivate } from '@angular/router';
import { IformComponent } from './../services/prevent-unsaved-changes.guard';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, AfterViewChecked, IformComponent {

  freequency: string[]= ['Daily', 'Weekly', 'Monthly'];

 constructor(private _router:Router) { } 

  validationMessages = {
  'name': {
    'required':      'Name is required.',
    'minlength':     'Name must be at least 4 characters long.',
    'maxlength':     'Name cannot be more than 24 characters long.',
     },
    'email': {
    'required':      'Email is required.',
    'minlength':     'Email must be at least 4 characters long.',
    'maxlength':     'Email cannot be more than 24 characters long.',
     },
      'freequency': {
      'required':      'Freequency is required.'
    }
};

formErrors = {
  'name': '',
  'email': ''
};

subscribeForm: NgForm;

@ViewChild('subscribeForm') currentForm: NgForm;

ngAfterViewChecked() {
  this.formChanged();
}

formChanged() {
  if (this.currentForm === this.subscribeForm) { return; }
  this.subscribeForm = this.currentForm;
  if (this.subscribeForm) {
    this.subscribeForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }
}

onValueChanged(data?: any) {
  if (!this.subscribeForm) { return; }
  const form = this.subscribeForm.form;

  for (const field in this.formErrors) {
         this.formErrors[field] = '';
       const control = form.get(field);
    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[field];
      for (const key in control.errors) {
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }
}

// canDeactivate(next, previous) {
// }
 

  ngOnInit() {
  }
  log(x) {
    console.log(x);
  }
// Two ways to submit form
  onSubmit(form) {
    console.log(form);
  }

  onSumitSub(f) {
    // printing form
    console.log(f.value);
    // Navigating to a new Route on success of this one
    this._router.navigate(['tweets']);
  }
  
hasUnsavedChanges(){
  if (this.subscribeForm.dirty){
    return true;
  }
  return false;
}

}
