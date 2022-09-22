import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidateRegisterService } from 'src/app/shared/service/validate-register.service';
import { noDuplicate, checkValidate } from 'src/app/shared/validators/validators';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass']
})
export class RegisterPageComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private validateService: ValidateRegisterService) { }

  userPanel = this.fb.group({
    username: new FormControl('', [
      Validators.minLength(7),
      Validators.required,
      Validators.maxLength(5)
    ]),
    email: new FormControl('',[
      checkValidate(this.validateService)
    ]),
    password: new FormControl('', [
      noDuplicate
    ]),
    passwordConfirm: new FormControl()
  })

  ngOnInit(): void {
    console.log(this.username)

}

  onRegister() {

  }

  get password(): FormControl {
    return this.userPanel.get("password") as FormControl
  }
  get username(): FormControl {
    return this.userPanel.get("username") as FormControl
  }
  get email() : FormControl{
    return this.userPanel.get("email") as FormControl
  }
  onInput(){
    console.log(this.email)
  }
  // showError(key: string): string {
  //   console.log(this.username?.errors)

  //   if (key === "required") {
  //     return "the username is required"
  //   }else if (key === "minlength") {
  //     return "the username should contains at least 7 chars"
  //   }else if(key === "maxlength"){
  //     return "the username should contains at most 5 chars"

  //   }
  //   return "";
  // }

  // get errorsMag(): any {
  //   const arr = []
  //   for (let key in this.username?.errors) {
  //     arr.push(key)
  //   }
  //   return arr;
  // }
}
