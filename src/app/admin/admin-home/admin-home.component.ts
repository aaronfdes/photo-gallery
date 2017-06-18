import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminHomeService } from './admin-home.service'
import { Album } from '../../model/album';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  album: Album;

  constructor(private _router: Router, private _adminHomeService: AdminHomeService) { }

  ngOnInit() {
    this._adminHomeService.getMostViewedAlbum().subscribe(album => this.album = album);
  }

  createAlbum() {
    this._router.navigate(["admin/albumDetails", "new"]);
  }

}
