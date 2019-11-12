import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styles: []
})
export class ServicioComponent  {

 servicio: any = {};


  constructor( private router: ActivatedRoute,
               private serviciosService: ServiciosService)
              {
                //muesta servicio individual
                this.router.params.subscribe( params => {
                  this.servicio = this.serviciosService.getServicio(params['category_id']);
                    // this.getServicio( params['id'] );
                    console.log(params);
                    console.log(this.servicio)
                  });
              }

//  obtiene la peticion del servicio
    // getServicio(id: string){
    //     this.serviciosService.getServicio( id )
    //     .subscribe(servicio => {
    //       this.servicio = servicio;
    //       // this.servicio = data;
    //       console.log(servicio );

    //     });
    // }
}
