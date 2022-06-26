import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  @Input() movieData:any
  @Output() sendTrigger = new EventEmitter<boolean>()
  constructor(/* @Inject(MAT_DIALOG_DATA) public movieData: DetailsComponent */) { }

  ngOnInit(): void {
    console.log('En editar'+this.movieData?.title)
  }

  closeEdit(){
    this.sendTrigger.emit()
  }

}
