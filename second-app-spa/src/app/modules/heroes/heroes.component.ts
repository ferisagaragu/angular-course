import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../core/http/heroes.service';
import { HeroesModel } from 'src/app/core/models/heroes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroesModel;

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().then((resp) => {
      this.heroes = resp.map((data: any) => new HeroesModel(data));
    });
  }

  onSeeMore(index: number): void {
    this.router.navigate(['/hero-information', index]);
  }

}
