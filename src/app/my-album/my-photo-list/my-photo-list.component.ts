import { Component, OnInit } from '@angular/core';
import { Photo } from '../../domain/photo.model';
import { PhotoService } from '../../services/photo.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-my-photo-list',
  templateUrl: './my-photo-list.component.html',
  styleUrls: ['./my-photo-list.component.scss'],
  providers: [
    PhotoService,
    UserService
  ]
})
export class MyPhotoListComponent implements OnInit {
  private photos: Photo[];
  private user;
  private selectedPhoto: Photo;

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.photoService.getPhotoByUserId(localStorage.getItem('id')).subscribe(
      (data) => {
        console.log(data);
        this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }, (error) => { console.log(error);
      }
    );
  }

  onSelect(photo: Photo) {

  }

}
