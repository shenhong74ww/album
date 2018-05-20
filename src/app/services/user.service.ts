import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../domain/user.model';

@Injectable()
export class UserService {
    private readonly domin = 'user';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    constructor(private http: Http, @Inject('BASE_CONFIG') private config) {}

    register(user: User) {
        const url = `${this.config.uri}/${this.domin}/register`;
        return this.http.post(url, JSON.stringify(user), { headers: this.headers});
    }

    sendCredentials(model) {
        const tokenUrl = `${this.config.uri}/${this.domin}/login`;
        return this.http.post(tokenUrl, JSON.stringify(model), {headers: this.headers});
    }

    sendToken(token) {
        const userUrl = `${this.config.uri}/rest/${this.domin}/users`;
        const accessHeader = new Headers({'Authorization': 'Bearer ' + token});
        return this.http.get(userUrl, {headers: accessHeader});
    }

    getUserById(id: string) {
        const url = `${this.config.uri}/rest/${this.domin}/userId`;
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, id, {headers: header});
    }

    getUserByName(userName: string) {
        const url = `${this.config.uri}/rest/${this.domin}/userName`;
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, userName, {headers: header});
    }

    addLike(user: User) {
        const url = `${this.config.uri}/${this.domin}/like`;
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, JSON.stringify(user), {headers: header});
    }

    deleteLike(deleteItem: any) {
        const url = `${this.config.uri}/${this.domin}/deleteLike`;
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, JSON.stringify(deleteItem), {headers: header});
    }
}
