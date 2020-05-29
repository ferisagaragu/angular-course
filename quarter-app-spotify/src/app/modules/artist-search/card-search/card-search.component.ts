import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../core/http/spotify.service';
import { ArtistModel } from '../../../core/models/artist.model';
import { swal } from '../../../core/functions/swal.function';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {

  searching: boolean;
  artists: Array<ArtistModel>;

  constructor(
    private spotifyService: SpotifyService,
    private router: Router
  ) {
    this.searching = false;
    this.artists = [];
  }

  ngOnInit(): void { }


  search(evt: HTMLInputElement): void {
    if (evt.value) {
      this.searching = true;

      this.spotifyService.searchArtist(evt.value).subscribe((resp: any) => {
        this.artists = resp.data;
        this.searching = false;
      }, () => {
        this.artists = [];
        this.searching = false;
        evt.value = '';

        swal.fire({
          title: 'Upps hemos tenido problemas con nuestros servidores',
          icon: 'error'
        });
      });
    } else {
      this.artists = [];
    }
  }

  onSelectArtist(id: string): void {
    this.router.navigate(['/artist-detail', id])
  }

}
