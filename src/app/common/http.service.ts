import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  get(url) {
    return this._http.get(environment.serverUrl + url).map(response => response.json());
  }

  post(url, data) {
    return this._http.post(environment.serverUrl + url, data).map(response => response.json());
  }

  put(url, data) {
    return this._http.put(environment.serverUrl + url, data).map(response => response.json());
  }

  delete(url) {
    return this._http.delete(environment.serverUrl + url).map(response => response.json());
  }

}

