import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateMovieComponent } from 'src/app/CRUD/UPDATE/update-movie/update-movie.component';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Output() sendedTrigger = new EventEmitter<boolean>()
  details: any
  editing: boolean = false
  constructor(private dialog:MatDialog, private movieServ: MovieService, private router: Router) {
  }

  ngOnInit(): void {
    this.showMovieDetails()
  }

  showMovieDetails(){    
    this.details = this.movieServ.details
    console.log('En show details: '+this.details?.title)
  }

  closeDetails(value: boolean){
    this.sendedTrigger.emit()
  }

  openEditDialog(){
    this.dialog.open(UpdateMovieComponent)
  }

  closeEditDialog(){
    this.editing = false
    this.dialog.closeAll()
  }

}
