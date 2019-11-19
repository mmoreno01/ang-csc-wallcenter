import { Component } from '@angular/core';
// import { AreasService } from '../../services/areas.service';
import { Hero, heroes } from '../../hero';


@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styles: []
})
export class SpaComponent   {

  alerta:string ="faciales";

  heroes  = heroes;
  hero = this.heroes[0];
  // data:any[] = [];

  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number { return hero.id; }

  
  //  owl carousel
  customOptions: any = {
    items: 1,
    // loop: true,
    // autoplay: true,
    margin:10,
    // center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        // loop:true
      },
      546: {
        items: 2,
        // loop:true
      },
      768: {
        items: 2,
        // loop:true
      },
      992: {
        items: 2,
        // loop:true
      },

    },
    nav: true
  }

}
