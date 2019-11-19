import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
  restData: any [] = [];
  servicios:any = {};


  mostrar="true";

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
