import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumModel } from '../models/album.model';
import { ArtistModel } from '../models/artist.model';
import { HttpResponseInterface } from '../interfaces/http-response.interface';
import { TopTrackModel } from "../models/top-track.model";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService extends BaseHttpService{

  constructor(public http: HttpClient) {
    super(http);
  }


  getNewReleases(): Observable<HttpResponseInterface<Array<AlbumModel>>> {
    this.getToken().subscribe((resp) => {
      sessionStorage.setItem('token', resp.access_token);
    });

    return this.http.get(`${this.baseUrl}/browse/new-releases?offset=5&limit=30`, {
      headers: this.headers
    }).pipe(
      map(res => this.responseAlbumReturn(res))
    );
  }

  searchArtist(name: string): Observable<HttpResponseInterface<Array<ArtistModel>>> {
    return this.http.get(`${this.baseUrl}/search?q=${name}&type=artist&limit=10`, {
      headers: this.headers
    }).pipe(
      map(res => this.responseArtistReturn(res))
    );
  }

  getArtistById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/artists/${id}`, {
      headers: this.headers
    });
  }

  getTopTrack(id: string): Observable<HttpResponseInterface<Array<TopTrackModel>>> {
    return this.http.get(`${this.baseUrl}/artists/${id}/top-tracks?country=us`, {
      headers: this.headers
    }).pipe(
      map(res => this.responseTracksReturn(res))
    );
  }


  private getToken(): Observable<any> {
    return this.http.post('https://accounts.spotify.com/api/token',
      this.spotifyParams,
      {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
      }
    );
  }

  private responseAlbumReturn(res: any): HttpResponseInterface<Array<AlbumModel>> {
    const response: any = <HttpResponseInterface<Array<AlbumModel>>>{};
    response.data = res.albums.items.map((model: any) => new AlbumModel(model));
    return response;
  }

  private responseArtistReturn(res: any): HttpResponseInterface<Array<ArtistModel>> {
    const response: any = <HttpResponseInterface<Array<ArtistModel>>>{};
    response.data = res.artists.items.map((model: any) => new ArtistModel(model));
    return response;
  }

  private responseTracksReturn(res: any): HttpResponseInterface<Array<TopTrackModel>> {
    const response: any = <HttpResponseInterface<Array<TopTrackModel>>>{};
    response.data = res.tracks.map((model: any) => new TopTrackModel(model));
    return response;
  }

}
