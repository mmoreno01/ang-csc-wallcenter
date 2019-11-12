import { Component } from '@angular/core';
// import { AreasService } from '../../services/areas.service';
import { Hero, heroes } from '../../hero';


@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styles: []
})
export class SpaComponent   {

  alerta:string ="uno";

  heroes  = heroes;
  hero = this.heroes[0];
  // data:any[] = [];

  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number { return hero.id; }


}
