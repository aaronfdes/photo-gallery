import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../common/http.service';
import { Album } from '../../model/album';

@Injectable()
export class AlbumDetailsService {

    constructor(private _httpService: HttpService, private _router: Router) { }

    createAlbum(album: Album) {
        return this._httpService.post("admin/album", album);
    }

    updateAlbum(album: Album) {
        return this._httpService.put("admin/album", album);
    }

    getAlbum(id: string) {
        if (id == 'new') {
            return Observable.of(new Album("album name"));
        } else {
            return this._httpService.get("admin/album/" + id);
        }
    }

}

