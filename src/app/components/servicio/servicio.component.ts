import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
})
export class ServicioComponent  {

  producto:any = {};
  // listadoProducto:any;

  constructor( private activatedRoute: ActivatedRoute,
              private _serviciosService: ServiciosService
             ){


    this.activatedRoute.params.subscribe( params => {

                this.producto = this._serviciosService.getServicio(params['id']);
                console.log(this.producto);

    } )



   }


}
