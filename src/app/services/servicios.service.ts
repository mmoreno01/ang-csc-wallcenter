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


//propiedad privada 
private heroes:any[] =
[
  {
    nombre: "Aquaman",
    bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
    img: "assets/image/Masajes/M_Antirelajante.jpg",
    aparicion: "1941-11-01",
    casa:"DC"
  },
  {
    nombre: "Batman",
    bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
    img: "assets/image/Masajes/M_craneofacial.jpg",
    aparicion: "1939-05-01",
    casa:"DC"
  },
  {
    nombre: "Daredevil",
    bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
    img: "assets/image/Masajes/M_cuarzos.jpg",
    aparicion: "1964-01-01",
    casa: "Marvel"
  },
  {
    nombre: "Hulk",
    bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
    img: "assets/image/Masajes/M_espaldacuello.jpg",
    aparicion: "1962-05-01",
    casa:"Marvel"
  },
  {
    nombre: "Linterna Verde",
    bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
    img: "assets/image/Masajes/M_localizado.jpg",
    aparicion: "1940-06-01",
    casa: "DC"
  },
  {
    nombre: "Spider-Man",
    bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
    img: "assets/image/Masajes/M_piernascansadas.jpg",
    aparicion: "1962-08-01",
    casa: "Marvel"
  },
  {
    nombre: "Wolverine",
    bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
    img: "assets/image/Masajes/M_prenatal.jpg",
    aparicion: "1974-11-01",
    casa: "Marvel"
  }
];

//meotdo para obtener imagnes fuera del servicio
get getHeroes(){
  return this.heroes;
}

}
