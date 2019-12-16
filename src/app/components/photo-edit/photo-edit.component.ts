import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { format } from 'url';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedPhoto:Photo;

  clearState(){
    // form.reset();
  }

  onSubmit(form:NgForm){

  }
}
