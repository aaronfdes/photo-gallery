export class Album {

    listImages: Array<string>;
    coverImage: string;
    published: boolean = true;

    constructor(public id: number, public name: string) {
        this.listImages = new Array<string>();
    }

    addImage(image: string) {
        this.listImages.push(image);
    }

}