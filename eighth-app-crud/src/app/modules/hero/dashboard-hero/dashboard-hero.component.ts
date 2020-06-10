import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HeroService } from "../../../core/http/hero.service";
import { ActivatedRoute, Router } from "@angular/router";
import { swal } from "../../../core/functions/swal.function";
import { HeroModel } from "../../../core/models/hero.model";

@Component({
  selector: 'app-dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: ['./dashboard-hero.component.css']
})
export class DashboardHeroComponent implements OnInit {

  form: FormGroup;
  id: string;
  hero: HeroModel;

  constructor(
    private formBuilder: FormBuilder,
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
    this.getUrlParams();
  }

  ngOnInit(): void {
    this.getHero();
  }

  onSave(): void {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach( formControl =>
        formControl.markAsTouched()
      );
      return;
    }

    const value = this.form.value;

    if (this.id === 'new') {
      this.saveHero(value);
    } else {
      this.updateHero(value);
    }
  }

  onLive(): void {
    this.form.get('state').setValue(false);
  }

  onDeath(): void {
    this.form.get('state').setValue(true);
  }

  invalid(key: string): boolean {
    return this.form.get(key).invalid && this.form.get(key).touched;
  }

  valid(key: string): boolean {
    return this.form.get(key).valid;
  }

  private getUrlParams(): void {
    this.activatedRoute.params.subscribe(params => this.id = params.id);
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      id: [{ value: '', disabled: true }],
      name: ['', Validators.compose([Validators.required])],
      power: ['', Validators.compose([Validators.required])],
      state: [true]
    });
  }

  private saveHero(value: any): void {
    this.heroService.createHero(value).subscribe((resp: HeroModel) => {
      swal.fire({
        title: `${resp.name} fue creado correctamente 🤘`,
        icon: 'success'
      });

      this.router.navigate(['/heroes']);
    }, (error) => {
      swal.fire({
        title: error,
        icon: 'error'
      });
    });
  }

  private updateHero(value: any): void {
    this.heroService.updateHero(this.id, this.form.value).subscribe(resp => {
      swal.fire({
        title: `${resp.name} fue actualizado correctamente 🍕`,
        icon: 'info'
      });

      this.router.navigate(['/heroes']);
    }, (error) => {
      swal.fire({
        title: error,
        icon: 'error'
      });
    });
  }

  private getHero(): void {
    if (this.id !== 'new') {
      this.heroService.getHero(this.id).subscribe((resp: HeroModel) => {
        this.form.setValue(resp);
        this.hero = resp;
      }, (error) => {
        swal.fire({
          icon: 'error',
          title: error
        });
      });
    }
  }

}
