import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ImageListService } from './image-list.service';
import { Album } from '../model/album';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  album: Album;
  imageClicked:string;

  constructor(private _imageListService: ImageListService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.switchMap((params: Params) => this._imageListService.getAlbum(+params['id']))
      .subscribe(album => this.album = album);
  }

}
