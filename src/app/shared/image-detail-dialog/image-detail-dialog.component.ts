import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, PageEvent } from '@angular/material';
import { Photo } from '../../domain/photo.model';
import { Comment } from '../../domain/comment.model';
import { UserService } from '../../services/user.service';
import { User } from '../../domain/user.model';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-image-detail-dialog',
  templateUrl: './image-detail-dialog.component.html',
  styleUrls: ['./image-detail-dialog.component.scss'],
  providers: [
    UserService,
    CommentService,
  ]
})
export class ImageDetailDialogComponent implements OnInit {

  photo: Photo;
  newComment: Comment = new Comment();
  user: User;
  comments: any;
  pageEvent: PageEvent;
  pageIndex: number;
  pageSize: number;
  length: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<ImageDetailDialogComponent>,
    private userService: UserService,
    private commentService: CommentService,
  ) { }

  ngOnInit() {
    this.photo = this.data.image;
    this.user = this.data.user;
    this.commentService.getComments(this.photo.photoId, '3', '0').subscribe(
      (page) => {
        console.log(page);
        this.comments = page.content;
        this.pageIndex = 0;
        this.pageSize = 3;
        this.length =  page.totalElements;
      }
    );
  }

  onClick() {
    this.dialogRef.close('I received your message');
  }

  onSubmit() {
    this.newComment.user = this.user;
    this.newComment.photoId = this.photo.photoId;
    this.commentService.createComment(this.newComment).subscribe(
      (data) => {
        if (data) {
          this.commentService.getComments(this.photo.photoId, '3', '0').subscribe(
            (page) => {
              console.log(page);
              this.comments = page.content;
              this.pageIndex = 0;
              this.pageSize = 3;
              this.length =  page.totalElements;
              this.newComment.content = '';
            }
          );
        }
      }, (error) => {
        console.log(error);
      }
    );
  }

  getServerData(event?: PageEvent) {
    this.commentService.getComments(this.photo.photoId, event.pageSize.toString(), event.pageIndex.toString()).subscribe(
      (page) => {
        console.log(page);
        this.comments = page.content;
        this.pageIndex = event.pageIndex;
        this.pageSize = 3;
        this.length =  page.totalElements;
      }
    );
    return event;
  }
}
