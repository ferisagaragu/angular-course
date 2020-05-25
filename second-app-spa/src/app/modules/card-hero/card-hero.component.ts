import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesModel } from 'src/app/core/models/heroes.model';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {

  @Input() hero: HeroesModel;
  @Input() index: number;

  @Output() onClickMore: EventEmitter<number>;

  constructor(
    private router: Router
  ) { 
    this.onClickMore = new EventEmitter();
  }

  ngOnInit(): void { }

  onSeeMore(): void {
    this.onClickMore.emit(this.index);
  }


}
