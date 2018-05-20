import { Photo } from './photo.model';
import { User } from './user.model';
export class Comment {
    commentId: string;
    content: string;
    photoId: string;
    user: User;
}
