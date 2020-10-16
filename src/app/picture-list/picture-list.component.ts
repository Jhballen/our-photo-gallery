import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator,} from '../models/paginator.model';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageNumber: any;

  goToPage() {
    this.paginator.pageIndex = this.pageNumber, // number of the page you want to jump.
      this.paginator.page.next({
        pageIndex: this.pageNumber,
        pageSize: this.paginator.pageSize,
        length: this.paginator.length
  });
  }

  custom(){
    this.paginator.pageIndex = this.pageNumber // number of the page you want to jump.
  }

  constructor() { }


    
  ngOnInit(): void {
  }

}
