// export class Hero {
//   id: number;
//   nombre: string;
//   bio: string;
//   url: string
// }

// export const heroes: Hero[] =

//   [
//     {
//       id: 1,
//       nombre: "Aquaman",
//       bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
//       url: "./assets/image/inicio/spa/jpg/faciales.png"
//     },
//     {
//       id: 2,
//       nombre: "Batman",
//       bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
//       url: "./assets/image/inicio/spa/jpg/faciales.png"

//     },
//     {
//       id: 3,
//       nombre: "Daredevil",
//       bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
//       url: "./assets/image/inicio/spa/jpg/faciales.png"

//     }

//   ];


export class Hero {
  id: number;
  name: string;
  emotion?: string;
}

export const heroes: Hero[] = [
  { id: 1, name: 'Dr Nice',  emotion: 'happy'},
  { id: 2, name: 'Narco',     emotion: 'sad' },
  { id: 3, name: 'Windstorm', emotion: 'confused' },
  { id: 4, name: 'Magneta'}
];
