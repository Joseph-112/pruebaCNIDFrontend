import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './Details/details/details.component';
import { MovielistComponent } from './MovieList/movielist/movielist.component';

const routes: Routes = [
  {
    //Componente que se ejecuta por defecto cuando el servidor inicia
    //Component that executes by defult when server starts
    path:'',
    component: MovielistComponent,
    
      //Componente asociado al componente padre
      //Component asociates to father component
      
    
  },{
    path:'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
