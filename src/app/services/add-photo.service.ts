import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Photo } from '../domain/photo.model';

@Injectable()
export class AddPhotoService {

    private readonly domin = 'photo';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    constructor(private http: Http, @Inject('BASE_CONFIG') private config) {}

    sendPhoto(photo: Photo) {
        const url = `${this.config.uri}/rest/${this.domin}/add`;
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, JSON.stringify(photo), { headers: header });
    }
}
