import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './image-list/image-list.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'gallery/:id', component: ImageListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
