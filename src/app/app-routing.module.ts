import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureListComponent } from './picture-list/picture-list.component';

/** Ruta de redireccion a /gallery
 *  Ruta del componente de lista de imagenes
 */
const routes: Routes = [
  {path:'', redirectTo:'/gallery', pathMatch: 'full'},
  {path:'gallery', component: PictureListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
