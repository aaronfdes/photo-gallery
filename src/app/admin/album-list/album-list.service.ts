import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../../environments/environment';
import { Album } from '../../model/album';

@Injectable()
export class AlbumListService {

    constructor(private _http: Http) { }

    getAlbums() {
        return this._http.get(environment.serverUrl + "/admin/album").map(response => response.json());
    }

    deleteAlbum(id: string) {
        return this._http.delete(environment.serverUrl + "/admin/album/" + id).map(response => response.json());
    }

}

