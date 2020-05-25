import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private showCard: boolean;
  private dataCard: any;
  private villains: Array<string>;

  constructor() { 
    this.showCard = true;
    this.dataCard = {
      person: 'Tio Ben',
      sentence: 'Un gran poder conlleva una responsabilidad'
    };
    this.villains = ['Venom', 'Electron', 'Dr. Octopus'];
  }

  ngOnInit(): void {
  }

}
