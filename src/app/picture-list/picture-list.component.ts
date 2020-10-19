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
  /**
   * -parameter pageNumber: numero de pagina de la lista de imagenes
   * -parameter author: Nombre del author de la imagen
   * -parameter sizePictures: Numero para escoger en muero de imagenes que queremos ver
   */
  pageNumber: number;
  author: String;
  sizePictures: number;
  /**
   * Lista de imagenes para ser llena con Pictures de estructura JSON
   * Muestra de imagenes con numero de imagenes que se van a ver 
   */
  pictures: Array<Picture>;
  constructor(private pictureInfoService: PictureInfoService) {
      this.pictures= new Array <Picture> ();
      this.sizePictures = 10;
   }


    
  ngOnInit(): void {
  this.fillPictures();
  }
  /**
   * Funcion de llenado de imagenes
   */
  fillPictures() {
    this.pictureInfoService.getPictures().subscribe(picture => {
      this.pictures = picture;
      console.log(this.pictures);
    })
  }
  /**
   * Funcion de filtro por author invocado por el textbox del filtro
   * parameter author: contiene el author de la imagen
   * return: imagenes por el nombre del author buscado
   */
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
