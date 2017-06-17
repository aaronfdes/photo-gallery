import {Image} from './image';

export class Album {
    _id: string;
    listImages: Array<Image>;
    coverImage: string;
    published: boolean = true;
    createdDate:Date;
    modifiedDate:Date;
    deletedDate:Date;
    numberOfImages:number;

    constructor(public name: string) {
        this.listImages = new Array<Image>();
        this.createdDate = new Date();
        this.modifiedDate = new Date();
    }

}