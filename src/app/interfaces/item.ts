import { Comment } from '../interfaces/comment';

export class Item {
    id: number;
    title: string;
    comments: Comment[];

    constructor(id: number, title: string, comments: Comment[]) {
        this.id = id;
        this.title = title;
        this.comments = comments;
    }
}
