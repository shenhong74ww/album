import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Comment } from '../domain/comment.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {
    private readonly domin = 'comment';
    private  httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
    };

    constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) {}

    createComment(comment: Comment): Observable<Comment> {
        const url = `${this.config.uri}/${this.domin}/create`;
        return this.http.post<Comment>(url, comment, this.httpOptions);
    }

    getComments(photoId: string, pageSize: string, pageIndex: string): any {
        const url = `${this.config.uri}/${this.domin}/comments/${photoId}`;
        let Params = new HttpParams();

        Params = Params.append('pageSize', pageSize);
        Params = Params.append('pageIndex', pageIndex);
        const options = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }),
            params: Params
        };
        return this.http.get(url, options);
    }
}

