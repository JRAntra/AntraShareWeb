import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateRegisterService } from 'src/app/shared/service/validate-register.service';
import { noDuplicate, checkValidate } from 'src/app/shared/validators/validators';
import { UserAccount } from 'src/app/shared/models/userAccount';
import { RegisterService } from '../../services/register.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass']
})
export class RegisterPageComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private validateService: ValidateRegisterService,
    private registerService: RegisterService,
    private router: Router) { }

  userPanel = this.fb.group({
    username: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
      Validators.maxLength(10)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ], [
      checkValidate(this.validateService)
    ]),
    password: new FormControl('', [
      noDuplicate,
      Validators.required,
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
    ])
  })

  ngOnInit(): void { }

  onRegister() {
    this.userPanel.markAllAsTouched();
    if (!this.ValidationError()) {
      const userToken: UserAccount = {
        userName: this.username.value,
        userEmail: this.email.value,
        password: this.password.value,
      }

      this.registerService.createNewAccount(userToken).subscribe((res:any) => {
        if (res) {
          this.router.navigate(['/login'])
        }
      })
    }
  }

  ValidationError() {
    console.log(this.username.errors)
    return (this.username.errors || this.email.errors || this.password.errors || this.passwordConfirm.errors)
  }

  get username(): FormControl {
    return this.userPanel.get("username") as FormControl
  }
  get email(): FormControl {
    return this.userPanel.get("email") as FormControl
  }
  get password(): FormControl {
    return this.userPanel.get("password") as FormControl
  }
  get passwordConfirm(): FormControl {
    return this.userPanel.get("passwordConfirm") as FormControl
  }

}
