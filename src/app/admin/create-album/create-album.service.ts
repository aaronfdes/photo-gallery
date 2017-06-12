import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../../environments/environment';
import { Album } from '../../model/album';

@Injectable()
export class CreateAlbumService {

    constructor(private _http: Http) { }

    createAlbum(album: Album) {
        return this._http.post(environment.serverUrl+"/admin/album",album).map(response => response.json());      
    }

}

