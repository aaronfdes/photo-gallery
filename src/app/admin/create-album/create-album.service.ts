import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Album } from '../../model/album';
import { listAlbums } from '../../dummy_albums';

@Injectable()
export class CreateAlbumService {

    constructor() { }

    createAlbum(album: Album) {
        listAlbums.push(album);
    }


}

