import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


  // url='http://www.cscwellnesscenter.com.mx/angular/';

  // recuperarTodos(){
  //   return this.http.get(`${this.url}conexion.php`);
  // }


  // alta(servicio) {
  //   return this.http.post(`${this.url}recuperartodos.php`, JSON.stringify(servicio));
  // }

}
