import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';

@Injectable()
export class ImageListService {

  constructor(private _httpService: HttpService) { }

  getAlbum(id: string) {
    return this._httpService.get("album/" + id);
  }

}

