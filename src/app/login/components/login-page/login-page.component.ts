import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup,FormArray, ValidationErrors, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  
  constructor(private router: Router,
    private fb: FormBuilder) { }
    
    userPanel = this.fb.group({
      username: new FormControl(),
      password: new FormControl()
    })

  // get username(): FormControl{
  //   return this.userPanel.controls['username'] as FormControl
  // }

  //formcontrol formGroup formArray 
  ngOnInit(): void {
    // console.log(this.userList)
    
  
  }

  onLogin() {

    // this.router.navigate([{outlets: { primary:'newsfeed', adv: 'adv'}}])
    console.log('logging in')
    this.router.navigate(['newsfeed'])

  }




}
