export class HeroModel {

  id: string;
  name: string;
  power: string;
  state: boolean;

  constructor(data: HeroModel | any) {
    Object.assign(this, data);
  }

}
