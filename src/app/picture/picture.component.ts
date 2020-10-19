import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../models/picture.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  @Input()
  /** parameter picture: de tipo modelo Picture  */
  picture: Picture;

  constructor() { }

  ngOnInit(): void {
  }
  /** abre url de la imagen en una pestaña
   * parameter picture.download_url: contiene el link de la imagen
   * return: pestaña con imagen
   */
  openUrl () {
    window.open(`${this.picture.download_url}`,'_blank');
  }

}
