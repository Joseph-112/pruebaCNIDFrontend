import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjangoServiceService {

  //Url de enlace a servicio Django en local
  //Link's Url to local Django service
  readonly apiURL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  //Método para obtener la lista de todas las películas
  //Method to obtain all movie list
  getMovieList():Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/movies/null')
  }

  //Método para obtener los detalles de una película por id
  //Method to obtain the details of a movie by id
  getMovieDetails(val: any):Observable<any> {
    return this.http.get<any>(this.apiURL + '/movies/',val)
  }

  //Método para ingresar una película
  //Method to add a movie
  addMovie(val: any) {
    return this.http.post<any[]>(this.apiURL + '/movies/',val)
  }

  //Método para modificar información de una película
  //Method to modify the information of a movie 
  updateMovie(val: any){
    return this.http.put<any[]>(this.apiURL + '/movies/',val)
  }

  //Método para eliminar una película
  //Method to delete a movie
  deleteMovie(val: any){
    return this.http.delete<any[]>(this.apiURL + '/movies/', val)
  }

  getMovieGenresList(){
    return this.http.get<any[]>(this.apiURL+'/genres/null')
  }

  getCollectionsList(){
    return this.http.get<any[]>(this.apiURL+'/collections/0')
  }
}
