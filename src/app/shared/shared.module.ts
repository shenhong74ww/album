import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDividerModule,
  MatDialogModule,
  MatChipsModule,
  MatPaginatorModule,
  MatTableModule,
} from '@angular/material';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';
import { ImageDetailDialogComponent } from './image-detail-dialog/image-detail-dialog.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ImageListSelectComponent,
    ImageDetailDialogComponent,
  ],
  declarations: [
    ImageListSelectComponent,
    ImageDetailDialogComponent,
  ],
  entryComponents: [
    ImageDetailDialogComponent,
  ]
})
export class SharedModule { }
