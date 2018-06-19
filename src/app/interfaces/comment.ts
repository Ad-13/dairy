export class Comment {
    text: string;
    img?: string;

    constructor(text: string, img?: string) {
        this.text = text;
        this.img = img;
    }
}
