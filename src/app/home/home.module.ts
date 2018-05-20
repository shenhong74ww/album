import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { PhotoHomeComponent } from './photo-home/photo-home.component';
import { SharedModule } from '../shared/shared.module';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { HomeRoutingModule } from './home-routing.module';
import { PhotoRowComponent } from './photo-row/photo-row.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [PhotoListComponent, PhotoItemComponent, PhotoHomeComponent, SidePanelComponent, PhotoRowComponent]
})
export class HomeModule { }
