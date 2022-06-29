import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  details:any

  constructor() { }

  movieDetailsMethod(details: any){
    
    this.details = details
    console.log('Servicio '+this.details.title)
  }
}
