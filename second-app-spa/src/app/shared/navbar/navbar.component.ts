import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/core/http/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  searchHero(searchInput: HTMLInputElement): void {
    this.heroesService.getHeroByName(searchInput.value).then((resp: Array<any>) => {
      let heroId: number = resp.length > 0 ? resp[0].id : -1;

      if (heroId >= 0) {
        searchInput.value = '';
      }

      this.router.navigate(['/hero-information', heroId]);
    });
  }

}
