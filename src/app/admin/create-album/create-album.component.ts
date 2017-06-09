import { Component, OnInit } from '@angular/core';
import { CreateAlbumService } from './create-album.service';
import { Album } from '../../model/album';
import { listAlbums } from '../../dummy_albums';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  albumName: string;
  listImages: Array<string>;

  constructor(private _createAlbumService:CreateAlbumService) { }

  ngOnInit() {
    this.listImages = new Array<string>();
  }

  addImage(image) {
    this.listImages.push(image);
  }

  removeImage(i) {
    this.listImages.splice(i, 1);
  }

  createAlbum() {
    let album = new Album(listAlbums.length,this.albumName);
    album.listImages = this.listImages;
    this._createAlbumService.createAlbum(album);
  }

}
