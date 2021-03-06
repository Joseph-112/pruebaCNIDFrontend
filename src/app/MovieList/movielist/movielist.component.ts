import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DjangoServiceService } from 'src/app/Services/django-service.service';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  // Variable para mostrar/ocultar sección de añadir una nueva película
  // Variable to show/hide section to add a new movie
  createComponent: boolean = false

  //Lista que recibe todas las películas de la base de datos
  //List that receives all movies from the database
  movieList: any[] = [];
  sended: boolean = true;
  movieDetails: any;

  //Declaración del servicio de Django, servicio movie para enviar datos de la película y router para redireccionar
  //Declaration of Django's service, movie service to send movie data and router to navigate
  constructor(
    private djangoService: DjangoServiceService,
    private movieServ: MovieService
  ) { }

  ngOnInit(): void {
    this.loadMovies()
    this.sended = false
  }

  //Método para cargar una lista de todas las películas
  //Method to load a list of all the movies  
  loadMovies() {
    this.djangoService.getMovieList().subscribe(res => {
      //Comprobación de la lista que llega usando el servicio de Django
      //Cheking the incomming list using the Django service 
      console.log(res)

      /*Al ser una consulta asíncrona, el resultado se obtiene a través del método ".subscribe()" 
      y se iguala la lista local a la lista de objetos entrante.
      Being an asynchronous query, the result is obtained through the ".subscribe()" method 
      and the local list is matched to the incoming object list.
      */
      this.movieList = res
    })
  }

  openMovieDetails(movie: any) {

    //Variable para mostrar u ocultar detalles de película    
    //Variable to show or hide movie details
    this.sended = true

    //Verificando la película que se va a enviar al componente detalles
    //Verifying movie that will be send to details component    
    console.log('Película seleccionada')
    console.log(movie)

    this.movieServ.movieDetailsMethod(movie)

  }

  closeMovieDetails() {
    this.sended = false
  }

  deleteMovie(movie: any) {
    this.djangoService.deleteMovie(movie).subscribe(res => {
      alert('Película eliminada')
    }
    )
  }

}
