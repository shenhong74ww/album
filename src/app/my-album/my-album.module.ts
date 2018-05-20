import { NgModule } from '@angular/core';
import { MyAlbumComponent } from './my-album/my-album.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { SharedModule } from '../shared/shared.module';
import { MyAlbumRoutingModule } from './my-album-routing.module';
import { MyPhotoListComponent } from './my-photo-list/my-photo-list.component';
import { MyPhotoItemComponent } from './my-photo-item/my-photo-item.component';

@NgModule({
  imports: [
    SharedModule,
    MyAlbumRoutingModule,
  ],
  declarations: [MyAlbumComponent, AddPhotoComponent, MyPhotoListComponent, MyPhotoItemComponent]
})
export class MyAlbumModule { }
