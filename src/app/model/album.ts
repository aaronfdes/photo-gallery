export class Album {
    _id: string;
    listImages: Array<string>;
    coverImage: string;
    published: boolean = true;

    constructor(public name: string) {
        this.listImages = new Array<string>();
    }

    setId() {
        this._id = this.name.replace(" ", "");
    }

    addImage(image: string) {
        this.listImages.push(image);
    }

}