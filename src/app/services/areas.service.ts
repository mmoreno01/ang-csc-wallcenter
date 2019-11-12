import { Injectable } from '@angular/core';


@Injectable()
export class AreasService {

  private data:any[] =

  [
    {
      id: 1,
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      aparicion: "1941-11-01",
      url: "./assets/image/inicio/spa/jpg/faciales.png"
    },
    {
      id: 2,
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      aparicion: "1939-05-01",
      url: "./assets/image/inicio/spa/jpg/faciales.png"

    },
    {
      id: 3,
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      aparicion: "1964-01-01",
      url: "./assets/image/inicio/spa/jpg/faciales.png"

    }

  ];

  constructor( ) {
    console.log("servicio listo.....");
   }


   getDatos(){

     return this.data;
   }

}




