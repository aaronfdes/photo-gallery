import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumDetailsService } from './album-details.service';
import { Album } from '../../model/album';
import { Image } from '../../model/image';

@Component({
  selector: 'app-create-album',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album: Album;
  newImage:string;
  showError: boolean;
  showSuccess: boolean;

  constructor(private _albumDetailsService: AlbumDetailsService, private _route: ActivatedRoute,private _location:Location) { }

  ngOnInit() {
    this._route.params.switchMap((params: Params) => this._albumDetailsService.getAlbum(params['id']))
      .subscribe(album => this.album = album);
  }

  addImage() {
    this.album.listImages.push(new Image(this.newImage));
    this.newImage = "";
  }

  removeImage(i) {
    this.album.listImages.splice(i, 1);
  }

  saveAlbum() {
    this.resetMessages();
    console.log(this.album);
    if (this.album._id) {
      this._albumDetailsService.updateAlbum(this.album)
        .subscribe(result => {
          this.showSuccess = true;
        }, err => {
          this.showError = true;
        });
    } else {
      this._albumDetailsService.createAlbum(this.album)
        .subscribe(result => {
          this.showSuccess = true;
        }, err => {
          this.showError = true;
        });
    }
  }

  setCoverImage(image: string) {
    this.album.coverImage = image;
  }

  goBack(){
    this._location.back();
  }

  private resetMessages() {
    this.showError = false;
    this.showSuccess = false;
  }

}
