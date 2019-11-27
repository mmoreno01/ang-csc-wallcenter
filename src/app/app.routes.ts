import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SpaComponent } from './components/spa/spa.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { BellezaComponent } from  './components/belleza/belleza.component';
import { BienestarComponent } from './components/bienestar/bienestar.component';
import { EliteHealthComponent } from './components/elite-health/elite-health.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import {RitualesEspecialesComponent } from'./components/rituales-especiales/rituales-especiales.component';
import  { FormServiciosComponent } from'./components/form-servicios/form-servicios.component';

 export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'spa', component: SpaComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'belleza', component: BellezaComponent },
  { path: 'bienestar', component: BienestarComponent},
  { path: 'elite-health', component: EliteHealthComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'servicio/:id', component: ServicioComponent},
  { path: 'rituales-especiales', component: RitualesEspecialesComponent},
  { path: 'form-servicios', component: FormServiciosComponent },


  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// export const APP_ROUTING = RouterModule.forRoot (APP_ROUTES, {useHash:true});
