import { Comment } from './comment.model';
import { User } from './user.model';

export class Photo {
    photoId: string;
    photoName: string;
    title: string;
    description: string;
    user: User;
    imageName: string;
    likeByUserList: User[];
    likes: number;
    commentList: Comment[];
    heartKind: string;
    created: Date;
}
