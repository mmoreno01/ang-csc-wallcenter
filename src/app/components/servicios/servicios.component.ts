import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivateRoute } from '@angular router';
import { ServiciosService } from '../../services/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent implements OnInit {

  servicios:any [] = [];

  p: number= 1;

constructor(private serviciosService: ServiciosService,
            private router:Router ){

   this.serviciosService.getServices()
        .subscribe((data: any) => {
        this.servicios  = data;
        // console.log(this.servicios);
   });
}

verServicio(servicio: any){
 console.log(servicio);
this.router.navigate(['/servicio',servicio.id]);
}

//obtiene las imagenes del servicio
  ngOnInit() {
   
  }

  
}


