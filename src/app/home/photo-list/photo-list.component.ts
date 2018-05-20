import { Component, OnInit } from '@angular/core';
import { Photo } from '../../domain/photo.model';
import { Router } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { UserService } from '../../services/user.service';
import { User } from '../../domain/user.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  providers: [
    PhotoService,
    UserService,
  ]
})
export class PhotoListComponent implements OnInit {
  photos: Photo[];
  user: User;

  constructor(
    private router: Router,
    private photoService: PhotoService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    const _self = this;
    this.userService.getUserById(localStorage.getItem('id')).subscribe(
      (user) => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.photoService.getPhotos().subscribe(
          (data) => {
            this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            if (this.photos) {
              for (const photo of this.photos) {
                photo.heartKind = 'heart';
                if (this.user.likeList) {
                  for (const like of this.user.likeList) {
                    if (photo.photoId === like.photoId) {
                      photo.heartKind = 'red-heart';
                    }
                  }
                }
              }
            }
          }, (error) => { console.log(error);
          }
        );
    });
  }
}
