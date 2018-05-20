import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ReportService {
    private readonly domin = 'report';

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
    };

    constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) {}

    getTopTenReports(): any {
        const url = `${this.config.uri}/${this.domin}/topTen`;
        return this.http.get(url, this.httpOptions);
    }
}

