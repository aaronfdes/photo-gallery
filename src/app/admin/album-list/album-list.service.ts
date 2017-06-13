import { Injectable } from '@angular/core';
import { HttpService } from '../../common/http.service';
import { Album } from '../../model/album';

@Injectable()
export class AlbumListService {

    constructor(private _httpService: HttpService) { }

    getAlbums() {
        return this._httpService.get("admin/album");
    }

    deleteAlbum(id: string) {
        return this._httpService.delete("admin/album/" + id);
    }

}

