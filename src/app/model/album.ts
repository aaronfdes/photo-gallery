export class Album {
    _id: string;
    listImages: Array<string>;
    coverImage: string;
    published: boolean = true;
    createdDate:Date;
    modifiedDate:Date;
    deletedDate:Date;

    constructor(public name: string) {
        this.listImages = new Array<string>();
        this.createdDate = new Date();
        this.modifiedDate = new Date();
    }

    setId() {
        this._id = this.name.replace(new RegExp(" ", 'g'), "");
    }

    addImage(image: string) {
        this.listImages.push(image);
    }

}