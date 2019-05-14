import { Component, OnInit } from '@angular/core';
// import { ActivateRoute } from '@angular router';
import { ServiciosService } from '../../services/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styles: []
})
export class ServiciosComponent implements OnInit {

  // heroes:any[] = [];

  p: number= 1;
  listadoProducto:any;
  productos:any =  [] ;


//recibimos los datos en un arreglo basio
  constructor(private _serviciosService:ServiciosService,
              private router:Router)
  {
    //Recuperar los datos del servicio para obtener los productos.
    _serviciosService.obtenerProductos()
    .then(data=>{
      this.listadoProducto = data;
      // console.log(data);
      this.cargarProductos();

    })
    .catch(err=>{
      console.log(err);
    });

  }


//obtiene las imagenes del servicio
  ngOnInit() {
    // this.heroes = this._serviciosService.getHeroes;
    // console.log(this.heroes);
  }


//Preparamos la funcion para obtener el listado de los productos
  cargarProductos()
  {
    this.productos = this.listadoProducto;
    // console.log(this.listadoProducto);

  };

//muestra el servicios por medio del index
  verProducto(idx:number){
    this.router.navigate(['/servicio',idx]);
  }


}


