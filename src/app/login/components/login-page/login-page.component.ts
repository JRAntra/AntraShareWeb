import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  public userFormGroup = new FormGroup({
    userNameFormControl: new FormControl('', 
    [
      Validators.required,
      Validators.maxLength(50),
    ]),
    passwordFormControl: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onLogin() {

    // this.router.navigate([{outlets: { primary:'newsfeed', adv: 'adv'}}])
    console.log('logging in')
    this.router.navigate(['newsfeed'])

  }


}
