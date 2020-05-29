import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class BaseHttpService {

  private _baseUrl: string;
  private _token: string;
  private _spotifyParams: any;

  constructor(public http: HttpClient) {
    this._baseUrl = environment.apiBaseUrl;
    this._token = sessionStorage.getItem('token');
    this._spotifyParams = environment.spotifyParams;
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  set baseUrl(url: string) {
    this._baseUrl = url;
  }

  get token(): string {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }

  set spotifyParams(spotifyParams: any) {
    this._spotifyParams = spotifyParams;
  }

  get spotifyParams(): any {
    return new HttpParams()
      .set('grant_type', this._spotifyParams.grant_type)
      .set('client_id', this._spotifyParams.client_id)
      .set('client_secret', this._spotifyParams.client_secret);
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  }
}
