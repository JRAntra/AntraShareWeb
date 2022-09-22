import { AbstractControl, ValidationErrors, AsyncValidator } from "@angular/forms";
import { map, Observable, of, pipe } from "rxjs";
import { ValidateRegisterService } from "../service/validate-register.service";
export function noDuplicate(control: AbstractControl): ValidationErrors | null {

    let newControlValue = control.value.split("").sort().join("")
    for (let i = 0; i < newControlValue.length - 1; i++) {
        if (newControlValue.charAt(i) === newControlValue.charAt(i + 1)) {
            return { "noDuplicate": true }
        }
    }
    return null;
}

export function checkValidate(service: ValidateRegisterService) {

    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        let emailStr = control.value;
        console.log(control.value)
        return service.checkEmailValid(emailStr).pipe(
            map(res => {
                if (res) {
                    return { "noDuplicateEmail": true }
                }
                else {
                    return null
                }
            })
        )
    }

}

