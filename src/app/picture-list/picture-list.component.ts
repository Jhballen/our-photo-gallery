import { Component, OnInit } from '@angular/core';
import { Picture } from '../models/picture.model';
import { PictureInfoService } from '../service/picture-info.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {


  pictures: Array<Picture>;
  constructor(private pictureInfoService: PictureInfoService) {
      this.pictures= new Array <Picture> ();
   }

  ngOnInit(): void {
  }

  fillPictures() {
    this.pictureInfoService.getPictures().subscribe(picture => {
      this.pictures = picture;
      console.log(this.pictures);
    })
  }



}
