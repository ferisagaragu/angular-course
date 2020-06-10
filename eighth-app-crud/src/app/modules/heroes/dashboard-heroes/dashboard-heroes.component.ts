import { Component, OnInit } from '@angular/core';
import { HeroService } from "../../../core/http/hero.service";
import { HeroModel } from "../../../core/models/hero.model";
import { swal } from "../../../core/functions/swal.function";

@Component({
  selector: 'app-dashboard-heroes',
  templateUrl: './dashboard-heroes.component.html',
  styleUrls: ['./dashboard-heroes.component.css']
})
export class DashboardHeroesComponent implements OnInit {

  heroes: Array<HeroModel>;
  load: boolean;

  constructor(private heroService: HeroService) {
    this.load = true;
    this.heroes = [];
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  deleteHero(id: string): void  {
    swal.fire({
      icon: 'question',
      title: '¿Estas seguro que deseas eliminar al heroe?',
      showCancelButton: true
    }).then(result => {
      if (result.isConfirmed) {
        this.deleteConfirmHero(id);
      }
    });
  }

  private getHeroes(): void {
    this.load = true;
    this.heroService.getHeroes().subscribe(resp => {
      this.heroes = resp;
      this.load = false;
    }, () => {
      this.load = false;
    });
  }

  private deleteConfirmHero(id: string): void {
    this.heroService.delete(id).subscribe(resp => {
      swal.fire({
        icon: 'success',
        title: 'Heroe eliminado'
      });

      this.getHeroes();
    }, (error) => {
      swal.fire({
        icon: 'error',
        title: error
      })
    });
  }

}
