import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';

import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './gallery/gallery.service';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageListService } from './image-list/image-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GalleryComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [GalleryService,ImageListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
