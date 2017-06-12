import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';
import { Album } from '../model/album';

@Injectable()
export class ImageListService {

  constructor(private _http: Http) { }

 getAlbum(id: string) {
    return this._http.get(environment.serverUrl + "/album/"+id).map(response => response.json());
  }

}

