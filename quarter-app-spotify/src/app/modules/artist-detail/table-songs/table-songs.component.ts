import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../../core/http/spotify.service";
import { ArtistModel } from "../../../core/models/artist.model";
import { TopTrackModel } from "../../../core/models/top-track.model";

@Component({
  selector: 'app-table-songs',
  templateUrl: './table-songs.component.html',
  styleUrls: ['./table-songs.component.css']
})
export class TableSongsComponent implements OnInit {

  artist: ArtistModel;
  topTracks: Array<TopTrackModel>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.spotifyService.getArtistById(id).subscribe((resp: any) => {
        this.artist = new ArtistModel(resp);
      });

      this.spotifyService.getTopTrack(id).subscribe((resp: any) => {
        this.topTracks = resp.data;
      });
    });
  }

}
