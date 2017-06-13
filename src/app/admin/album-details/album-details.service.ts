import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Album } from '../../model/album';

@Injectable()
export class AlbumDetailsService {

    constructor(private _http: Http, private _router: Router) { }

    createAlbum(album: Album) {
        return this._http.post(environment.serverUrl + "/admin/album", album).map(response => response.json());
    }

    updateAlbum(album: Album) {
        return this._http.put(environment.serverUrl + "/admin/album", album).map(response => response.json());
    }

    getAlbum(id: string) {
        if (id == 'new') {
            return Observable.of(new Album("album name"));
        } else {
            return this._http.get(environment.serverUrl + "/admin/album/" + id).map(response => response.json());
        }
    }

}

