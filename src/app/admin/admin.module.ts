import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { CreateAlbumService } from './create-album/create-album.service';
import { AlbumListService } from './album-list/album-list.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminHomeComponent,
        CreateAlbumComponent,
        AlbumListComponent
    ],
    providers: [
        CreateAlbumService,
        AlbumListService
    ]
})
export class AdminModule { }