import { Album } from './model/album';

export const listAlbums = new Array<Album>();

var catAlbum = new Album(1, "Cats");
catAlbum.addImage("http://lorempixel.com/200/200/cats/1");
catAlbum.addImage("http://lorempixel.com/400/200/cats/2");
catAlbum.addImage("http://lorempixel.com/200/400/cats/3");
catAlbum.addImage("http://lorempixel.com/100/200/cats/4");
catAlbum.addImage("http://lorempixel.com/200/600/cats/5");
catAlbum.addImage("http://lorempixel.com/250/200/cats/6");
catAlbum.addImage("http://lorempixel.com/200/200/cats/7");
catAlbum.addImage("http://lorempixel.com/200/250/cats/8");
catAlbum.addImage("http://lorempixel.com/200/200/cats/9");
catAlbum.addImage("http://lorempixel.com/250/200/cats/10");

var nightlife = new Album(2, "Night Life");
nightlife.addImage("http://lorempixel.com/400/200/nightlife/1");
nightlife.addImage("http://lorempixel.com/400/200/nightlife/2");
nightlife.addImage("http://lorempixel.com/400/200/nightlife/3");

var fashion = new Album(3, "Fashion");
fashion.addImage("http://lorempixel.com/400/200/fashion/1");
fashion.addImage("http://lorempixel.com/400/200/fashion/2");
fashion.addImage("http://lorempixel.com/400/200/fashion/3");

var technics = new Album(4, "Technics");
technics.published = false;
technics.addImage("http://lorempixel.com/400/200/technics/1");
technics.addImage("http://lorempixel.com/400/200/technics/2");
technics.addImage("http://lorempixel.com/400/200/technics/3");

var sportAlbum = new Album(5, "Sports");
sportAlbum.addImage("http://lorempixel.com/400/200/sports/1");
sportAlbum.addImage("http://lorempixel.com/400/200/sports/2");
sportAlbum.addImage("http://lorempixel.com/400/200/sports/3");

listAlbums.push(catAlbum);
listAlbums.push(sportAlbum);
listAlbums.push(technics);
listAlbums.push(fashion);
listAlbums.push(nightlife);