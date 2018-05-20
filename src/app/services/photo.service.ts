import { Headers, Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { User } from '../domain/user.model';
import { Photo } from '../domain/photo.model';

@Injectable()
export class PhotoService {

    private readonly domin = 'photo';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    constructor(private http: Http, @Inject('BASE_CONFIG') private config) {}

    getPhotoByUser(user: User) {
        const url = `${this.config.uri}/rest/${this.domin}/user`;
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, JSON.stringify(user), { headers: header });
    }

    getPhotoByUserId(userId: String) {
        const url = `${this.config.uri}/rest/${this.domin}/${userId}`;
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.get(url, { headers: header });
    }

    getPhotoById(photoId: number) {
        const url = `${this.config.uri}/rest/${this.domin}/photoId`;
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, JSON.stringify(photoId), { headers: header });
    }

    updatePhoto(photo: Photo) {
        const url = `${this.config.uri}/rest/${this.domin}/update`;
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, JSON.stringify(photo), { headers: header });
    }

    getPhotos() {
        const url = `${this.config.uri}/${this.domin}/allPhotos`;
        return this.http.get(url);
    }
}
