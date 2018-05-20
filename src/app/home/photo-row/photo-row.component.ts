import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-row',
  templateUrl: './photo-row.component.html',
  styleUrls: ['./photo-row.component.scss']
})
export class PhotoRowComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
