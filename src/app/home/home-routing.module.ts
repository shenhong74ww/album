import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotoHomeComponent } from './photo-home/photo-home.component';

const routes: Routes = [
    { path: 'home', component: PhotoHomeComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
