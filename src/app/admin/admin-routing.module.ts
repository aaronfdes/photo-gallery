import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumListComponent } from './album-list/album-list.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        /*canActivate: [AuthGuard],*/
        children: [
            {
                path: '',
                children: [
                    { path: 'albumDetails/:id', component: AlbumDetailsComponent },
                    { path: 'viewAll', component: AlbumListComponent },
                    { path: '', component: AdminHomeComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }