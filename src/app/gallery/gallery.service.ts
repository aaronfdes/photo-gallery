import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';

@Injectable()
export class GalleryService {

  constructor(private _httpService: HttpService) { }

  getAlbums() {
    return this._httpService.get("album");
  }
}

