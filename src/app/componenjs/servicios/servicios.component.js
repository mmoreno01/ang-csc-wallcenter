"use strict";var __decorate=this&&this.__decorate||function(t,e,o,r){var c,i=arguments.length,n=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;0<=s;s--)(c=t[s])&&(n=(i<3?c(n):3<i?c(e,o,n):c(e,o))||n);return 3<i&&n&&Object.defineProperty(e,o,n),n};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),ServiciosComponent=function(){function t(t,e){var o=this;this._serviciosService=t,this.router=e,this.p=1,this.productos=[],t.obtenerProductos().then(function(t){o.listadoProducto=t,o.cargarProductos()}).catch(function(t){console.log(t)})}return t.prototype.ngOnInit=function(){},t.prototype.cargarProductos=function(){this.productos=this.listadoProducto},t.prototype.verProducto=function(t){this.router.navigate(["/servicio",t])},t=__decorate([core_1.Component({selector:"app-servicios",templateUrl:"./servicios.component.html",styles:[]})],t)}();exports.ServiciosComponent=ServiciosComponent;