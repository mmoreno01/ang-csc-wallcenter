import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ActivateRoute } from '@angular router';
import { ServiciosService } from '../../services/servicios.service';
// import { AreasService } from '../../services/areas.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent implements OnInit {

  // data:any = {};
  restData: any [] = [];
  servicios:any = {};
  mostrar= "true";
  ritualEspecial ="false";

  p: number= 1;

constructor(private serviciosService: ServiciosService,
            // private verServicios: ServiciosService,
            // private _areasService:AreasService,
            private router:Router ){

   this.serviciosService.getServices()
        .subscribe((data: any) => {
        this.servicios  = data;
        console.log(this.servicios);
   });
}






//obtiene las imagenes del servicio
  ngOnInit() {
    this.servicios = this.serviciosService.getServices();
    // this.data = this.verServicios.getServicio();
    // this.data = this._areasService.getDatos();
    // console.log(this.servicios);
  }
  activateClass(subModule){
    subModule.active = !subModule.active;
  }

  verServicio(n){
     let cat:Number = n;
     let u=0;
    this.restData = [];

    for(let i=0; i < this.servicios.length; ++i){

          if ( this.servicios[i].category_id ==  cat){

            // console.log(this.servicios[i].title);
            this.restData[u] = this.servicios[i];
            u = u + 1;

          }
    }
    // this.router.navigate(['/servicio',n]);
    console.log(this.restData);
    console.log(n);
    console.log(this.mostrar);


  }



}


