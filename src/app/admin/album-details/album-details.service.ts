import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth.service';

import { HttpService } from '../../common/http.service';
import { Album } from '../../model/album';

@Injectable()
export class AlbumDetailsService {

    constructor(private _httpService: HttpService, private _router: Router, private _authService: AuthService) { }

    createAlbum(album: Album) {
        if (!album.coverImage) {
            album.coverImage = album.listImages[0];
        }
        return this._httpService.post("admin/album", album, this.getOptions());
    }

    updateAlbum(album: Album) {
        album.modifiedDate = new Date();
        return this._httpService.put("admin/album", album, this.getOptions());
    }

    getAlbum(id: string) {
        if (id == 'new') {
            return Observable.of(new Album("album name"));
        } else {
            return this._httpService.get("admin/album/" + id, this.getOptions());
        }
    }

    private getOptions() {
        let headers = new Headers({ 'Accept': 'application/json' });
        headers.append('x-access-token', this._authService.jwt);
        return new RequestOptions({ headers: headers });
    }


}

