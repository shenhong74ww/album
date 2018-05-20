import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from '../../anims/card.anim';
import { HeatService } from '../../services/heat.service';
import { ImageDetailDialogComponent } from '../../shared/image-detail-dialog/image-detail-dialog.component';
import { MatDialog } from '@angular/material';
import { UserService } from '../../services/user.service';
import { User } from '../../domain/user.model';

@Component({
  selector: 'app-my-photo-item',
  templateUrl: './my-photo-item.component.html',
  styleUrls: ['./my-photo-item.component.scss'],
  animations: [
    cardAnim
  ],
  providers: [
    HeatService,
    UserService,
    MatDialog,
  ]
})
export class MyPhotoItemComponent implements OnInit {

  user: User;
  @Input() item;
  @HostBinding('@card') cardState = 'out';
  constructor(
    private heatService: HeatService,
    private dialog: MatDialog,
    private userService: UserService,
  ) { }

  ngOnInit() {
    const _self = this;
    this.userService.getUserById(localStorage.getItem('id')).subscribe(
      (user) => {
        _self.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
      }
    );
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
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
}
