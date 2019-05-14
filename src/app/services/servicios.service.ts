import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {



  constructor(private http: HttpClient) { }

    //Declaramos la funcion para recuperar los datos procesados por el constructor de la clase
    public obtenerProductos()
    {
      return new Promise(
        resolve=>{
          this.http.get('http://www.cscwellnesscenter.com.mx/angular/recuperartodos.php')
          .subscribe(
          data => resolve(data)
          )

        }

      )
    };



//meotdo para obtener imagnes fuera del servicio
 getServicios(){
  return this.obtenerProductos;
}

getServicio(idx: string){
  return this.obtenerProductos[idx];
}

}
