import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class BaseHttpService {

  private _baseUrl: string;
  private _token: string;

  constructor(public http: HttpClient) {
    this._baseUrl = environment.apiBaseUrl;
    this._token = sessionStorage.getItem('token');
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

  get headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  }

}
