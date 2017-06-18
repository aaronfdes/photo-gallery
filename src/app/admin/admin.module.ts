import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsService } from './album-details/album-details.service';
import { AlbumListService } from './album-list/album-list.service';
import { AdminHomeService } from './admin-home/admin-home.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminHomeComponent,
        AlbumDetailsComponent,
        AlbumListComponent
    ],
    providers: [
        AlbumDetailsService,
        AlbumListService,
        AdminHomeService
    ]
})
export class AdminModule { }