import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private autor: string;
  private year: number;

  constructor() { 
    this.autor = 'Fernando 🤘';
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
