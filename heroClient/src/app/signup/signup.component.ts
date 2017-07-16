import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {UserNameValidator} from './../validators/UserNameValidator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  // form = new FormGroup({
  //   userName: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required)
  // });

  constructor( private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
        userName: ['', Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(24),
            UserNameValidator.checkForSpaceInUserName]),
            UserNameValidator.shouldbeUnique // async validator
    ],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  signUp(){
    console.log(this.form);
    console.log(this.form.value.userName);
    // call a service- example like Login
    // if it fails explictly set an error here.
    this.form.get('userName').setErrors({
      inValidLogin: true
    });
     }

}
