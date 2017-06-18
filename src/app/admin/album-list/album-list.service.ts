import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpService } from '../../common/http.service';
import { AuthService } from '../../auth.service';
import { Album } from '../../model/album';

@Injectable()
export class AlbumListService {

    constructor(private _httpService: HttpService, private _authService: AuthService) { }

    getAlbums() {
        return this._httpService.get("admin/album", this.getOptions());
    }

    deleteAlbum(id: string) {
        return this._httpService.delete("admin/album/" + id, this.getOptions());
    }

    private getOptions() {
        let headers = new Headers({ 'Accept': 'application/json' });
        headers.append('x-access-token', this._authService.jwt);
        return new RequestOptions({ headers: headers });
    }

}

