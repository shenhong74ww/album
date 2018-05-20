import { Component, OnInit } from '@angular/core';
import { UploadPhotoService } from '../../services/upload-photo.service';
import { UserService } from '../../services/user.service';
import { AddPhotoService } from '../../services/add-photo.service';
import { Photo } from '../../domain/photo.model';
import { PhotoHomeComponent } from '../../home/photo-home/photo-home.component';
import { User } from '../../domain/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss'],
  providers: [
    UploadPhotoService,
    AddPhotoService,
    UserService,
  ],
})
export class AddPhotoComponent implements OnInit {

  newPhoto: Photo = new Photo();
  user: User;

  constructor(private uploadPhotoService: UploadPhotoService,
              private addPhotoService: AddPhotoService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const _self = this;
    this.userService.getUserById(localStorage.getItem('id')).subscribe(
      (user) => {
        _self.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        _self.newPhoto.user = _self.user;
        _self.addPhotoService.sendPhoto(_self.newPhoto).subscribe(
          (data) => {
            if (data) {
              this.router.navigateByUrl('my-album');
            }
          }, (error) => {
            console.log(error);
          }
        );
      }, (error) => { console.log(error);
      }
    );
  }
}
