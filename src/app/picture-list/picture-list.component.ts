import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator,} from '../models/paginator.model';
import { Picture } from '../models/picture.model';
import { PictureInfoService } from '../service/picture-info.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageNumber: number;
  author: String;
  sizePictures: number;
  pictures: Array<Picture>;
  constructor(private pictureInfoService: PictureInfoService) {
      this.pictures= new Array <Picture> ();
      this.sizePictures = 10;
   }


    
  ngOnInit(): void {
  this.fillPictures();
  }

  fillPictures() {
    this.pictureInfoService.getPictures().subscribe(picture => {
      this.pictures = picture;
      console.log(this.pictures);
    })
  }
  filtrar(){
    if (this.author != "") {
      this.pictures=this.pictures.filter(res =>{
      return res.author.toLocaleLowerCase().match(this.author.toLocaleLowerCase());
    });
    }else if (this.author ==""){
      this.ngOnInit();
    }
  }


}
