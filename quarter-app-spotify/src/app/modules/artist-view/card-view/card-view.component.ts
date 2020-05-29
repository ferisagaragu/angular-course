import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../core/http/spotify.service';
import { AlbumModel } from '../../../core/models/album.model';
import { swal } from '../../../core/functions/swal.function';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  releases: Array<AlbumModel> = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.releases = [];
    this.loading = true;
  }

  ngOnInit(): void {
    this.spotifyService.getNewReleases().subscribe((resp: any) => {
      this.releases = resp.data;
      this.loading = false;
      console.log(this.releases);
    }, () => {
      this.loading = false;

      swal.fire({
        title: 'Upps hemos tenido problemas con nuestros servidores',
        icon: "error"
      });
    });
  }

}
