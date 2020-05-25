import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/core/http/heroes.service';
import { HeroesModel } from 'src/app/core/models/heroes.model';

@Component({
  selector: 'app-hero-information',
  templateUrl: './hero-information.component.html',
  styleUrls: ['./hero-information.component.css']
})
export class HeroInformationComponent implements OnInit {

  hero: HeroesModel;
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { 
    this.loading = true;

    this.activatedRoute.params.subscribe(({ id }: any) => {
      if (id >= 0) {
        this.heroesService.getHero(id).then((resp: any) => {
          this.hero = new HeroesModel(resp);
          this.loading = false;
        });
      } else {
        this.hero = null;
        this.loading = false;
      }
    });
  }

  ngOnInit(): void { }

}
