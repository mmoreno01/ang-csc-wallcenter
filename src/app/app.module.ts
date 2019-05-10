import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TipsComponent } from './components/tips/tips.component';
import { BellezaComponent } from './components/belleza/belleza.component';
import { SpaComponent } from './components/spa/spa.component';
import { BienestarComponent } from './components/bienestar/bienestar.component'
import {HomeComponent }from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';



//Rutas
import {APP_ROUTING} from './app.routes';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { SliderComponent } from './components/slider/slider.component';
import { EliteHealthComponent } from './components/elite-health/elite-health.component';
import { ContactoComponent } from './components/contacto/contacto.component';

//services
import { ServiciosService } from './services/servicios.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PromocionesComponent,
    AuthenticationComponent,
    TipsComponent,
    TruncatePipe,
    BellezaComponent,
    SpaComponent,
    BienestarComponent,
    HomeComponent,
    GaleriaComponent,
    SliderComponent,
    EliteHealthComponent,
    ContactoComponent,
    ServiciosComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      CarouselModule,
      APP_ROUTING,
      NgxPaginationModule
  ],
  providers: [
    ServiciosService,
    
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }

export class SomeModule { }
