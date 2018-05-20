import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from '../../anims/card.anim';
import { MatDialog } from '@angular/material';
import { ImageDetailDialogComponent } from '../../shared/image-detail-dialog/image-detail-dialog.component';
import { HeatService } from '../../services/heat.service';
import { User } from '../../domain/user.model';
import { UserService } from '../../services/user.service';
import { Like } from '../../domain/like.model';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
  animations: [
    cardAnim
  ],
  providers: [
    HeatService,
    UserService
  ]
})
export class PhotoItemComponent implements OnInit {
  @Input() item;
  @Input() user;
  @HostBinding('@card') cardState = 'out';
  showAction: boolean;
  like: Like = new Like();
  deleteItem =  {
    'user': null,
    'photoId': '',
  };

  constructor(
    private dialog: MatDialog,
    private heatService: HeatService,
    private userService: UserService) { }

  ngOnInit() {
    this.showAction = false;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
    this.showAction = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
    this.showAction = false;
  }

  onSelect(item) {
    this.heatService.addViews(item.photoId).subscribe(heat => console.log(heat));
    const dialogRef = this.dialog.open(ImageDetailDialogComponent, {
      height: '100%',
      width: '100%',
      autoFocus: false,
      data: {
        image: item,
        user: this.user
      }
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  likeClick(item) {
    if (item.heartKind === 'heart') {
      this.like.photoId = item.photoId;
      if (this.user.likeList) {
        this.user.likeList.push(this.like);
      } else {
        this.user.likeList = [this.like];
      }
      this.userService.addLike(this.user).subscribe(
        (data) => {
          item.heartKind = 'red-heart';
        },
        (eror) => {}
      );
    } else {
      this.user.likeList = this.user.likeList.filter(
        (like) => {
          return like.photoId !== item.photoId;
        }
      );
      this.deleteItem.user = this.user;
      this.deleteItem.photoId = item.photoId;
      this.userService.deleteLike(this.deleteItem).subscribe(
        (data) => {
          item.heartKind = 'heart';
        },
        (eror) => {}
      );
    }
  }
}
