import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Iron Man';
  array: Array<string> = ['Iron Man', 'Viuda Negra', 'Hulk', 'Dr. Strange'];
  PI: number = Math.PI;
  percent: number = 0.234;
  salary: number = 10.45;
  date: Date = new Date();
  language: string = 'es';
  myName: string = 'ferNanDo iSaIas';
  videoUrl: string = 'https://www.youtube.com/embed/lzFzw-stRl8';
  showPassword: boolean = false;

  hero: any = {
    name: 'Logan',
    key: 'Woleverine',
    age: 500,
    address: {
      street: 'Calle X',
      hose: 'Mansion X'
    }
  };

  promise = new Promise<string>((resolve: Function) => {
    setTimeout(() => {
      resolve('fin del mundo');    
    }, 4500);
  });

}
