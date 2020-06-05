import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CountriesService } from "../../../core/http/countries.service";
import { CountryModel } from "../../../core/models/country.model";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  data: any;
  countries: Array<CountryModel>;
  countriesLoad: boolean;
  user: any = {
    name: 'Fernando',
    lastName: 'Garcia',
    email: 'ferisagaragu@gmail.com',
    country: '',
    // gender: 'M'
  };

  constructor(private countriesService: CountriesService) {
    this.countriesLoad = true;
  }

  ngOnInit(): void {
    this.getEsCountries();
  }

  onSubmit(formData: NgForm): void {
    this.data = formData.value;

    if (!formData.valid) {
      Object.values(formData.controls).forEach(control => {
        control.markAsTouched();
      });

      return;
    }

    console.log(formData.value);
  }

  getEsCountries(): void {
    this.countriesService.getEsCountries().subscribe((data: Array<CountryModel>) => {
      this.countries = data;
      this.countriesLoad = false;
    }, () => {
      this.countriesLoad = false;
    });
  }

}
