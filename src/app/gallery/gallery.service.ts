import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Album } from '../model/album';
import { listAlbums } from '../dummy_albums';

@Injectable()
export class GalleryService {

  constructor() { }

  getAlbums() {
    return Observable.of(listAlbums.filter(album => album.published == true));
  }


}

