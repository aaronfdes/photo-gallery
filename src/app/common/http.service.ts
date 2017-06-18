import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  get(url, options?) {
    return this._http.get(environment.serverUrl + url, options).map(response => response.json());
  }

  post(url, data, options?) {
    return this._http.post(environment.serverUrl + url, data, options).map(response => response.json());
  }

  put(url, data, options?) {
    return this._http.put(environment.serverUrl + url, data, options).map(response => response.json());
  }

  delete(url, options?) {
    return this._http.delete(environment.serverUrl + url, options).map(response => response.json());
  }

}

