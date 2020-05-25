export class HeroesModel {
  name: string;
  bio: string;
  img: string;
  appearance: string;
  home: string;

  constructor(data: any | HeroesModel) {
    Object.assign(this, data);
  }
  
}