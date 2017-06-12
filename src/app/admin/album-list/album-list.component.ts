import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumListService } from './album-list.service';
import { Album } from '../../model/album';

@Component({
  selector: 'app-create-album',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  listAlbums = new Array<Album>();

  constructor(private _albumListService: AlbumListService, private _router: Router) { }

  ngOnInit() {
    this.getAllAlbums();
  }

  deleteAlbum(id: string) {
    this._albumListService.deleteAlbum(id).subscribe(response => { this.getAllAlbums(); });
  }

  private getAllAlbums() {
    this._albumListService.getAlbums().subscribe(listAlbums => { this.listAlbums = listAlbums; });
  }

}
