import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'my-album', redirectTo: '/my-album', pathMatch: 'full' },
    { path: 'report', redirectTo: '/daily-report', pathMatch: 'full' },
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
