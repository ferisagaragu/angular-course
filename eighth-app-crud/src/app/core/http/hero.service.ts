import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseHttpService } from "./base-http.service";
import { HeroModel } from "../models/hero.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroService extends BaseHttpService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getHeroes(): Observable<Array<HeroModel>> {
    return this.http.get(`${this.baseUrl}/heroes.json`)
      .pipe(map(data => {
        const out: Array<HeroModel> = [];

        for (let respKey in data) {
          out.push(new HeroModel({
            id: respKey,
            ...data[respKey]
          }));
        }

        return out;
      }));
  }

  getHero(id: string): Observable<HeroModel> {
    return this.http.get(`${this.baseUrl}/heroes/${id}.json`)
      .pipe(map(data => new HeroModel({
        id,
        ...data
      })));
  }

  createHero(hero: any): Observable<HeroModel> {
    return this.http.post(`${this.baseUrl}/heroes.json`, hero)
      .pipe(map(data => hero));
  }

  updateHero(id: string, hero: any): Observable<HeroModel> {
    return this.http.put(`${this.baseUrl}/heroes/${id}.json`, hero)
      .pipe(map(data => hero));
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/heroes/${id}.json`);
  }

}
