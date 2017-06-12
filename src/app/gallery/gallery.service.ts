import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';
import { Album } from '../model/album';

@Injectable()
export class GalleryService {

  constructor(private _http: Http) { }

  getAlbums() {
    return this._http.get(environment.serverUrl + "/album").map(response => response.json());
  }
}

