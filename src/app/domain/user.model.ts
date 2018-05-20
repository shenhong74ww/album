import { Photo } from './photo.model';
import { Like } from './like.model';
export class User {
    id?: string;
    email: string;
    name?: string;
    password?: string;
    avatar?: string;
    created: Date;
    likeList: Like[];
}
