import { Component, OnInit } from '@angular/core';
// import { ActivateRoute } from '@angular router';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styles: []
})
export class ServiciosComponent implements OnInit {

 
  p: number= 1;
  listadoProducto:any;
  productos:any =  [] ;

  allimages:any[] = [];

  constructor(private _serviciosService:ServiciosService)
  {


    //Recuperar los datos del servicio para obtener los productos.
    _serviciosService.obtenerProductos()
    .then(data=>{
      this.listadoProducto = data;
      console.log(data);
      this.cargarProductos();
    })
    .catch(err=>{
      console.log(err);
    });


  };

  ngOnInit(): void {
  }

//Preparamos la funcion para obtener el listado de los productos
  cargarProductos()
  {
    this.productos = this.listadoProducto;
    //Evaluamos si el listado obtenido cuenta con registros, con la finalidad de hacerle saber al usuario que no cuenta con registros.
    // if (this.categorias.length > 0)
    // {
    //   this.mensajeSinProductos = false;
    // }
    // else
    // {
    //   this.mensajeSinProductos = true;
    // }
  };

}




