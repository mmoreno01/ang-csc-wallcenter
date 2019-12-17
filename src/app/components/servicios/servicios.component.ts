import { Component, OnInit } from '@angular/core';
// import { ActivateRoute } from '@angular router';
import { ServiciosService } from '../../services/servicios.service';
// import { AreasService } from '../../services/areas.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl}  from '@angular/forms';

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
  formdata;
  name;
  email;



  p: number= 1;

constructor(private serviciosService: ServiciosService,
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
    this.formdata = new FormGroup({
      name: new FormControl("miguwl"),
      email: new FormControl("miguel@gmail.com")
   });
   
    console.log(this.formdata );

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

 guardar(){
   console.log("formulario de contacto");
 }
onClickSubmit(data){
   this.email = data.email;
}


}


