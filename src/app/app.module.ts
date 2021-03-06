import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureComponent } from './picture/picture.component';

//Angular material imports
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

//Import http service
import { HttpClientModule } from '@angular/common/http';

//Import prime gn
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

//Import Paginator
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PictureListComponent,
    PictureComponent
  ],
  /** Importacion de modulos de Angular   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
