import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyAlbumComponent } from './my-album/my-album.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';

const routes: Routes = [
    { path: 'my-album', component: MyAlbumComponent },
    { path: 'add-photo', component: AddPhotoComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyAlbumRoutingModule {}
