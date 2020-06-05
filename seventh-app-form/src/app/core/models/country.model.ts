export class CountryModel {

  name: string;
  value: string;

  constructor(data: CountryModel | any) {
    this.name = data.name;
    this.value = data.cioc;
  }

}
