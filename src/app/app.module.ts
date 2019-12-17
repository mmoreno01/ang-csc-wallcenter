import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//components
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
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SearchComponent } from './components/search/search.component';
import { heroSwitchComponents } from '../app/components/hero-swich.components';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { SliderComponent } from './components/slider/slider.component';
import { EliteHealthComponent } from './components/elite-health/elite-health.component';
import { ContactoComponent } from './components/contacto/contacto.component';


// pipes
import { TruncatePipe } from './pipes/truncate.pipe';


//Rutas
import { ROUTES } from './app.routes';

//services
import { ServiciosService } from './services/servicios.service';
import { AreasService } from './services/areas.service';
import { CscComponent } from './components/csc/csc.component';
import { DataPipe } from './pipes/data.pipe';
import { RitualesEspecialesComponent } from './components/rituales-especiales/rituales-especiales.component';
import { FormServiciosComponent } from './components/form-servicios/form-servicios.component';


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
    ServiciosComponent,
    ServicioComponent,
    SearchComponent,
    heroSwitchComponents,
    CscComponent,
    DataPipe,
    RitualesEspecialesComponent,
    FormServiciosComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      CarouselModule,
      NgxPaginationModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot( ROUTES, {useHash:true}  )
  ],
  providers: [
    ServiciosService,
    AreasService
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }

export class SomeModule { }
