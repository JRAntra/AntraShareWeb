import { AbstractControl, AsyncValidatorFn, FormControl, FormBuilder, FormGroup, FormArray, ValidationErrors, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})


export class LoginPageComponent implements OnInit {


  constructor(private router: Router,
    private fb: FormBuilder) { }

  noMoreThan3Appereance(control: AbstractControl): ValidationErrors {

    return { "noMoreThan3Appereance": true }
  }


  userPanel = this.fb.group({
    username: new FormControl('',
      [
        Validators.minLength(5),
        Validators.required,
        this.noMoreThan3Appereance

      ]),
    password: new FormControl('',
      [
        Validators.minLength(8),
        Validators.required,
      ]
    )
  })

  // get username(): FormControl{
  //   return this.userPanel.controls['username'] as FormControl
  // }

  //formcontrol formGroup formArray 
  ngOnInit(): void {
    // console.log(this.userList)
    console.log(this.username)


  }

  onLogin() {

    // this.router.navigate([{outlets: { primary:'newsfeed', adv: 'adv'}}])
    console.log('logging in')
    this.router.navigate(['newsfeed'])

  }


  get username(): FormControl {
    return this.userPanel.controls["username"] as FormControl
  }
  get password(): FormControl {
    return this.userPanel.controls["password"] as FormControl
  }







}
