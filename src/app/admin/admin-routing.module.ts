import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateAlbumComponent } from './create-album/create-album.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        /*canActivate: [AuthGuard],*/
        children: [
            {
                path: '',
                children: [
                    { path: '', component: AdminHomeComponent },
                    { path: 'create', component: CreateAlbumComponent }
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