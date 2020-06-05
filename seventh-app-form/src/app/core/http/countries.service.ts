import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CountryModel } from "../models/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getEsCountries(): Observable<Array<CountryModel>> {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .pipe(map((res: Array<any>) => res.map((data) => new CountryModel(data))));
  }

}
