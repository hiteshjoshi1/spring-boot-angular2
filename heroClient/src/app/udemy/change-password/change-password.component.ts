import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {PasswordValidator} from './../../validators/PasswordValidator';
import {IformComponent} from './../services/prevent-unsaved-changes.guard';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit,IformComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
   }

   createForm() {
     this.form = this.formBuilder.group({
       oldPassword: ['',
            Validators.compose([
            Validators.required,
            Validators.minLength(4)]),
            PasswordValidator.passwordCheck
       ],
       newPassword: ['',
          Validators.compose([
            Validators.required,
            Validators.minLength(4)])
       ],
       reTypePassword: ['',
          Validators.compose([
            Validators.required,
            Validators.minLength(4)])
       ]
     });
   }

  ngOnInit() {
  }

  changePwd() {
    console.log(this.form);
    if (this.form.value.newPassword !== this.form.value.reTypePassword){

    this.form.get('reTypePassword').setErrors ({
      passwordMismatch: true
    });

  }
}

hasUnsavedChanges(){
  if (this.form.dirty){
    return true;
  }
  return false;
}

}
