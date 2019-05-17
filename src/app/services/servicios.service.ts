import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
// import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  servcio:any []=[];


  constructor( private http: HttpClient) { }

//obtiene la informacion de la base de datos por el metodo get
  getServices(){
   return this.http.get('http://www.cscwellnesscenter.com.mx/angular/recuperartodos.php')
          .pipe( map( data =>{
              return data;
          }))
  }
//obtiene los datos por id 
getServicio( id: string){
  return this.http.get('http://www.cscwellnesscenter.com.mx/angular/recuperartodos.php')
  .pipe(map( data => {
      return data[id];
  }))
}



}
