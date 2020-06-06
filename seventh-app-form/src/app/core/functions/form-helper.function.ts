import { FormArray, FormControl, FormGroup } from "@angular/forms";

export const markAsTouched = (formControl: any): void => {
  Object.values(formControl).forEach((control: FormControl | FormGroup | FormArray) => {
    if (control instanceof FormGroup) {
      markAsTouched(control.controls);
    } else if (control instanceof FormArray) {
      control.controls.forEach(arrayControl => arrayControl.markAsTouched());
    } else {
      control.markAsTouched();
    }
  });
};
