import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DjangoServiceService } from 'src/app/Services/django-service.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movieData:any = {
    title:'',
    overview:'',
    adult:false,
    collection:{name: ''},
    genres:[],
    imdb_id:'',
    release_date:0,
    tagline:'',
    poster_path:''
  }
  // Lista de géneros desde servicio django consultando en Firestore, formato Array 
  // Genres list from django service by consulting Firestore, Array format
  movieGenresList: any[] = []
  // Lista de colecciones desde servicio django consultando en Firestore, formato JSON
  // Collections list from django service by consulting Firestore, JSON format
  movieCollectionsList: any[] = []
  // Nuevos géneros que estarán en la película
  // New genres that will stay on the movie
  selectedGenres = new FormControl();
  selectedCollection: any
  constructor(private djangoServ: DjangoServiceService) { }

  ngOnInit(): void {
  }
  loadDetails() {
    // Lista de colecciones en Firestore
    // Collections list in Firestore
    this.djangoServ.getCollectionsList().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        this.movieCollectionsList.push(res[index])
      }
    })
   
    // Lista de géneros en Firestore
    // Genres list in Firestore
    this.djangoServ.getMovieGenresList().subscribe(res => {
      res.forEach(element => {
        this.movieGenresList = element.genres
        this.movieGenresList.forEach(element2 => {
          console.log(element2)
        });
      });
    })
  }

  addMovieDetails(){
    this.djangoServ.addMovie(this.movieData).subscribe()
  }

}
