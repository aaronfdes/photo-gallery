import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from './gallery.service';
import { Album } from '../model/album';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  listAlbums = new Array<Album>();

  constructor(private _galleryService: GalleryService, private _router: Router) { }

  ngOnInit() {
    this._galleryService.getAlbums().subscribe(listAlbums => { this.listAlbums = listAlbums;});
  }

  navigateToAlbum(id) {
    this._router.navigate(["/gallery", id]);
  }

}
