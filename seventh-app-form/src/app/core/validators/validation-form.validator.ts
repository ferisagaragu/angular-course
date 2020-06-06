import { Injectable } from '@angular/core';
import { CustomValidator } from "../interfaces/custom-validator.interface";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValidationFormValidator {

  constructor() { }

  notNickName(formControl: FormControl): CustomValidator {
    if (formControl.value?.toLowerCase() === 'fernny') {
      return {
        notNickName: true
      };
    }
  }

  equalsPassword(password: string, passwordEquals: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const passwordEqualsControl = formGroup.controls[passwordEquals];

      if (passwordControl.value !== passwordEqualsControl.value) {
        passwordEqualsControl.setErrors({ passwordNotEquals: true })
      }
    };
  }

  //async validations
  existNickName(formControl: FormControl): Observable<CustomValidator> | Promise<CustomValidator> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (formControl.value === 'fernnypay95') {
          resolve({ existNickName: true });
        } else {
          resolve(null);
        }
      }, 3500)
    });
  }

}
