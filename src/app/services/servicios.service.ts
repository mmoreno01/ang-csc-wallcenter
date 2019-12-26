import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
// import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  servcio:any []=[];
  obj:any []=[];
  obj2:any []=[];


  constructor( private http: HttpClient) {
    console.log('servicio web conexion listo');
   }

//obtiene la informacion de la base de datos por el metodo get
  getServices(){
   return this.http.get('http://www.cscwellnesscenter.com.mx/angular/recuperartodos.php')
          .pipe( map( data =>{
            console.log(data);
              return data;

          }))
  }
//obtiene los datos por id
getServicio( id: string){
  return this.http.get('http://www.cscwellnesscenter.com.mx/angular/recuperartodos.php')
  .pipe(map( data => {
    console.log(data);

      return data['id'];
  }))
}




gallery = [
  {
    id: "1",
    img: "./assets/image/galeria/1.webp"
  },
  {
    id: "2",
    img: "./assets/image/galeria/2.webp"
  },
  {
    id: "3",
    img: "./assets/image/galeria/3.webp"
  },
  {
    id: "4",
    img: "./assets/image/galeria/6.webp"
  },
  {
    id: "5",
    img: "./assets/image/galeria/7.webp"
  },
  {
    id: "6",
    img: "./assets/image/galeria/8.webp"
  },
  {
    id: "7",
    img: "./assets/image/galeria/13.webp"
  },
  {
    id: "8",
    img: "./assets/image/galeria/14.webp"
  },
  {
    id: "9",
    img: "./assets/image/galeria/16.webp"
  },
  {
    id: "10",
    img: "./assets/image/galeria/19.webp"
  }
]

getGallery(){
    return this.gallery;
}

getService(idx:string){
  return this.servcio[idx];
}

}
