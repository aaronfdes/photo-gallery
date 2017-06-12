import { Component, OnInit } from '@angular/core';
import { CreateAlbumService } from './create-album.service';
import { Album } from '../../model/album';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  albumName: string;
  listImages: Array<string>;
  coverImage:string;
  publish:boolean = false;

  constructor(private _createAlbumService: CreateAlbumService) { }

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
    let album = new Album(this.albumName);
    album.listImages = this.listImages;
    album.coverImage = this.coverImage; 
    album.published = this.publish;
    this._createAlbumService.createAlbum(album).subscribe(result => { console.log("Saved Successfully") }, err => { console.log("Failed to save") });
  }

  setCoverImage(image:string){
    this.coverImage = image;
  }

}
