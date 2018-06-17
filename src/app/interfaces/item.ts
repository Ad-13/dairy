import { Comment } from '../interfaces/comment';

export class Item {
  id: number;
  title: string;
  comments: Comment[] = [];
}
