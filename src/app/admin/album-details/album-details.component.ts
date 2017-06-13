import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AlbumDetailsService } from './album-details.service';
import { Album } from '../../model/album';

@Component({
  selector: 'app-create-album',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album: Album;

  constructor(private _albumDetailsService: AlbumDetailsService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.switchMap((params: Params) => this._albumDetailsService.getAlbum(params['id']))
      .subscribe(album => this.album = album);
  }

  addImage(image) {
    this.album.listImages.push(image);
  }

  removeImage(i) {
    this.album.listImages.splice(i, 1);
  }

  saveAlbum() {
    if (this.album._id) {
      this._albumDetailsService.updateAlbum(this.album)
        .subscribe(result => {
          console.log("Updated Successfully")
        }, err => {
          console.log("Failed to Update")
        });
    } else {
      this.album.setId();
      this._albumDetailsService.createAlbum(this.album)
        .subscribe(result => {
          console.log("Saved Successfully")
        }, err => {
          console.log("Failed to save")
        });
    }
  }

  setCoverImage(image: string) {
    this.album.coverImage = image;
  }

}
