import { AbstractControl, AsyncValidatorFn, FormControl, FormBuilder, FormGroup, FormArray, ValidationErrors, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { userLoginToken } from 'src/app/shared/models/userAccount';
import { LoginService } from '../../services/login.service';
import { debounceTime, map, tap, throttle, interval, delay, switchMap, BehaviorSubject, Subject, ReplaySubject, of, first, take, takeUntil, Observable, from, fromEvent} from 'rxjs';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})


export class LoginPageComponent implements OnInit {
  constructor(private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService) { }

showTemplateIndicator = true;

  userPanel = this.fb.group({
    useremail: new FormControl('',
      [
        Validators.required,
      ]),
    password: new FormControl('',
      [
        Validators.minLength(7),
        Validators.required,
      ]
    )
  })

  ngOnInit(): void {
    this.setLimitForChange()
  }
  

  onLogin() {
    if (!this.validationError()) {
      const userInfo: userLoginToken = {
        userEmail: this.useremail.value,
        password: this.password.value
      }
      this.loginService.userLogin(userInfo).subscribe(res => {
        if (res) {
          this.router.navigate(["newsfeed"])
        }
      })
    }
  }

  validationError() {
    return (this.useremail.errors || this.password.errors)
  }
  get useremail(): FormControl {
    return this.userPanel.controls["useremail"] as FormControl
  }
  get password(): FormControl {
    return this.userPanel.controls["password"] as FormControl
  }


setLimitForChange(){
  
  this.useremail.valueChanges.pipe(
     debounceTime(1000)
    )
    .subscribe(res=> console.log(res))


}





}
