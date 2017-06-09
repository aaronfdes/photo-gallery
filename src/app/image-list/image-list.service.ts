import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Album } from '../model/album';
import { listAlbums } from '../dummy_albums';

@Injectable()
export class ImageListService {

  constructor() { }

  getAlbum(id: number) {
    return Observable.of(listAlbums.filter(album => album.id == id)[0]);
  }


}

