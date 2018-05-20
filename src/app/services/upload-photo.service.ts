import { Injectable, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';

@Injectable()
export class UploadPhotoService implements OnInit {
    fileToUpload: File;
    imageUrl: any;
    showImage = false;

    private readonly domin = 'photo';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http, @Inject('BASE_CONFIG') private config, private sanitizer: DomSanitizer) {}

    ngOnInit() {
    }

    upload() {
        const url = `${this.config.uri}/rest/${this.domin}/upload`;
        this.makeFileRequest(url, [], this.fileToUpload).then(
            (result) => {}
        );
    }

    fileChangeEvent(event) {
        this.fileToUpload = event.currentTarget.files[0];
        this.showImage = true;
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileToUpload));
    }

    makeFileRequest(url: string, params: Array<string>, file: File) {
        return new Promise((resolve, reject) => {
            const formData: any = new FormData();
            const xhr = new XMLHttpRequest();
            formData.append('uploads[]', file, file.name);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
            xhr.send(formData);
        });
    }

}
