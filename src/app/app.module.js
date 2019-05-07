"use strict";var __decorate=this&&this.__decorate||function(e,o,n,t){var r,p=arguments.length,c=p<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,o,n,t);else for(var i=e.length-1;0<=i;i--)(r=e[i])&&(c=(p<3?r(c):3<p?r(o,n,c):r(o,n))||c);return 3<p&&c&&Object.defineProperty(o,n,c),c};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_1=require("@angular/platform-browser"),core_1=require("@angular/core"),http_1=require("@angular/common/http"),animations_1=require("@angular/platform-browser/animations"),ngx_owl_carousel_o_1=require("ngx-owl-carousel-o"),truncate_pipe_1=require("./pipes/truncate.pipe"),ngx_pagination_1=require("ngx-pagination"),app_component_1=require("./app.component"),header_component_1=require("./components/header/header.component"),body_component_1=require("./components/body/body.component"),footer_component_1=require("./components/footer/footer.component"),promociones_component_1=require("./components/promociones/promociones.component"),authentication_component_1=require("./components/authentication/authentication.component"),tips_component_1=require("./components/tips/tips.component"),belleza_component_1=require("./components/belleza/belleza.component"),spa_component_1=require("./components/spa/spa.component"),bienestar_component_1=require("./components/bienestar/bienestar.component"),home_component_1=require("./components/home/home.component"),app_routes_1=require("./app.routes"),galeria_component_1=require("./components/galeria/galeria.component"),slider_component_1=require("./components/slider/slider.component"),elite_health_component_1=require("./components/elite-health/elite-health.component"),contacto_component_1=require("./components/contacto/contacto.component"),servicios_service_1=require("./services/servicios.service"),servicios_component_1=require("./components/servicios/servicios.component"),AppModule=function(){function e(){}return e=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,header_component_1.HeaderComponent,body_component_1.BodyComponent,footer_component_1.FooterComponent,promociones_component_1.PromocionesComponent,authentication_component_1.AuthenticationComponent,tips_component_1.TipsComponent,truncate_pipe_1.TruncatePipe,belleza_component_1.BellezaComponent,spa_component_1.SpaComponent,bienestar_component_1.BienestarComponent,home_component_1.HomeComponent,galeria_component_1.GaleriaComponent,slider_component_1.SliderComponent,elite_health_component_1.EliteHealthComponent,contacto_component_1.ContactoComponent,servicios_component_1.ServiciosComponent],imports:[platform_browser_1.BrowserModule,http_1.HttpClientModule,animations_1.BrowserAnimationsModule,ngx_owl_carousel_o_1.CarouselModule,app_routes_1.APP_ROUTING,ngx_pagination_1.NgxPaginationModule],providers:[servicios_service_1.ServiciosService],bootstrap:[app_component_1.AppComponent]})],e)}();exports.AppModule=AppModule;var SomeModule=function(){};exports.SomeModule=SomeModule;