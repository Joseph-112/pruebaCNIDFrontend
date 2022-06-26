import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateMovieComponent } from 'src/app/CRUD/UPDATE/update-movie/update-movie.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() details: any
  @Output() sendedTrigger = new EventEmitter<boolean>()
  editing: boolean = false
  constructor(private dialog:MatDialog) {
  }

  ngOnInit(): void {
    console.log('En detalles')
    this.showMovieDetails()
    /* this.movieService.movieDetailsTrigger.subscribe(details => {
      console.log('Detalles que llegan ... ',details)
    }) */
  }

  showMovieDetails(){    
    console.log('En show details: '+this.details?.title)
    /* 
    this.movieService.movie.subscribe(movieData => {
      alert('Data entrante: '+movieData?.title)
      //alert(movieData?.title)
      //this.details = movieData?.title
      //alert(this.details)

    }) */
  }

  closeDetails(value: boolean){
    this.sendedTrigger.emit()
  }

  openEditDialog(){
    this.dialog.open(UpdateMovieComponent,{data:this.details})
  }

  closeEditDialog(){
    this.editing = false
  }

}
