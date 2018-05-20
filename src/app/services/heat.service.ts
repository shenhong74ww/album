import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeatService {
    private readonly domin = 'heat';

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
    };

    constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) {}

    addViews(photoId: string) {
        const url = `${this.config.uri}/${this.domin}/updateViews/${photoId}`;
        return this.http.put(url, this.httpOptions);
    }
}

