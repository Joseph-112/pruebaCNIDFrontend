import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, NgForm, FormBuilder } from '@angular/forms';
import { DjangoServiceService } from 'src/app/Services/django-service.service';
import { MovieService } from 'src/app/Services/movie.service';


@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})

export class UpdateMovieComponent implements OnInit {

  // Detalles de la película (Encapsulada en servicio django)
  // Movie's details (Encapsule in Django service)
  movieData: any
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

  @Output() sendTrigger = new EventEmitter<boolean>()
  constructor(private movieServ: MovieService, private djangoServ: DjangoServiceService) { }

  ngOnInit(): void {
    this.loadDetails()
  }

  closeEdit() {
    this.sendTrigger.emit()
  }

  loadDetails() {
    this.movieData = this.movieServ.details
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

  updateMovieDetails() {


    if (this.selectedGenres == null) {
      console.log(this.selectedGenres)
    }
    if (this.selectedCollection == null) {
      console.log(this.selectedCollection)
    }
    /* this.djangoServ.updateMovie(this.movieData).subscribe(res=>{
      console.log('enviado')
    }) */
  }

}
