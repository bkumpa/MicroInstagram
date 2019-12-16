import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent implements OnInit {

  @Input() photo;
  constructor() { }

  ngOnInit() {
  }

}
