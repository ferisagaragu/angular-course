import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  constructor() { }

  getHeroes(): any {
    return fetch("http://localhost:3000/heroes").then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return response.json()
    });
  }

  getHero(id: number): any {
    return fetch(`http://localhost:3000/heroes/${id}`).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return response.json()
    });
  }

  getHeroByName(name: string): any {
    
    return fetch(`http://localhost:3000/heroes?name_like=${name}&_limit=1`).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return response.json()
    });
  }

}