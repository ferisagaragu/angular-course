import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { markAsTouched } from "../../../core/functions/form-helper.function";
import { ValidationFormValidator } from "../../../core/validators/validation-form.validator";

@Component({
  selector: 'app-dashboar-form',
  templateUrl: './dashboar-form.component.html',
  styleUrls: ['./dashboar-form.component.css']
})
export class DashboarFormComponent implements OnInit {

  form: FormGroup;
  submit: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private validationForm: ValidationFormValidator
  ) {
    this.createForm();
    this.submit = false;
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((change) => {
      console.log(change);
    });

    this.form.statusChanges.subscribe((change) => {
      console.log(change);
    });

    this.form.controls['password'].valueChanges.subscribe((change) => {
      console.log(change);
    });

  }

  //Public Methods
  save(): void {
    if ((!this.form.valid) || this.form.pending) {
      markAsTouched(this.form.controls);
      this.submit = true;
      return;
    }

    this.form.reset();
  }

  addWish(): void {
    this.wishes.push(this.formBuilder.control(
      '',
      Validators.compose([Validators.required])
    ));
  }

  deleteWish(index: number): void {
    this.wishes.removeAt(index);
  }

  //Validators
  valid(key: string): boolean {
    return this.form.get(key).valid;
  }

  invalid(key: string): boolean {
    return this.form.get(key).invalid &&
      this.form.get(key).touched;
  }

  invalidArrayContainer(key: string): boolean {
    return (this.form.get(key) as FormArray).invalid && this.submit && ((this.form.get(key) as FormArray).length == 0);
  }

  validArray(key: string, index: number): boolean {
    return (this.form.get(key) as FormArray).controls[index].valid
  }

  invalidArray(key: string, index: number): boolean {
    return (this.form.get(key) as FormArray).controls[index].invalid &&
      (this.form.get(key) as FormArray).controls[index].touched;
  }

  get wishes(): FormArray {
    return this.form.get('wishes') as FormArray;
  }

  //private methods
  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      lastName: ['', Validators.compose([Validators.required, this.validationForm.notNickName])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      nickname: ['', Validators.compose([Validators.required]), this.validationForm.existNickName],
      password: ['', Validators.compose([Validators.required])],
      passwordEquals: ['', Validators.compose([Validators.required])],
      address: this.formBuilder.group({
        district: ['', Validators.compose([Validators.required])],
        city: ['', Validators.compose([Validators.required])]
      }),
      wishes: this.formBuilder.array([], Validators.compose([Validators.required]))
    },{
      validators: [this.validationForm.equalsPassword('password', 'passwordEquals')]
    });

    //this.form.setValue <- en este caso si se podría añadir wishes desde un inicio
    this.form.reset(  {
      name: 'Fernando',
      lastName: 'fernny2',
      email: 'ferisagaragu@gmail.com',
      password: 'password',
      passwordEquals: 'password',
      address: {
        district: 'Valle de las flores',
        city: 'Guadalajara'
      }
    });

    ['Deseo ser guapo'].forEach(wish => this.wishes.push(this.formBuilder.control(wish)));
  }

}
