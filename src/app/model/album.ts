export class Album {
    _id: string;
    listImages: Array<string>;
    coverImage: string;
    published: boolean = true;

    constructor(public name: string) {
        this._id = this.name.replace(" ","");
        this.listImages = new Array<string>();
    }

    addImage(image: string) {
        this.listImages.push(image);
    }

}