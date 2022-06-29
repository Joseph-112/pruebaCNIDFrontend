//Importaciones Angular
//Angular importations
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//Importaciones Angular Material
//Angular Material importations
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list'


//Importaciones de componentes
//Components importations
import { AddMovieComponent } from './CRUD/CREATE/add-movie/add-movie.component';
import { UpdateMovieComponent } from './CRUD/UPDATE/update-movie/update-movie.component';
import { DetailsComponent } from './Details/details/details.component';
import { MovielistComponent } from './MovieList/movielist/movielist.component';
import { MovieService } from './Services/movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    DetailsComponent,
    AddMovieComponent,
    UpdateMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTreeModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDividerModule
  ],
  exports: [
    MovielistComponent,
    DetailsComponent
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
