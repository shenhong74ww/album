import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  photos = [
    {
      'photoId': '1',
      'photoName': 'photo1',
      'title': 'photo1',
      'description': 'photo1',
      // 'user': 'User',
      'imageName': '/assets/img/photos/photo1.jpg',
      // 'likeByUserList': User[],
      'likes': '2',
      // 'commentList': 'Comment'[],
      'created': new Date(),
    },
    {
      'photoId': '2',
      'photoName': 'photo2',
      'title': 'photo2',
      'description': 'photo2',
      // 'user': 'User',
      'imageName': '/assets/img/photos/photo2.jpg',
      // 'likeByUserList': User[],
      'likes': '1',
      // 'commentList': 'Comment'[],
      'created': new Date(),
    },
    {
      'photoId': '3',
      'photoName': 'photo3',
      'title': 'photo3',
      'description': 'photo3',
      // 'user': 'User',
      'imageName': '/assets/img/photos/photo3.jpg',
      // 'likeByUserList': User[],
      'likes': '1',
      // 'commentList': 'Comment'[],
      'created': new Date(),
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
