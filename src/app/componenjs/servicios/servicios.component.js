"use strict";var __decorate=this&&this.__decorate||function(e,o,t,r){var c,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var s=e.length-1;0<=s;s--)(c=e[s])&&(i=(n<3?c(i):3<n?c(o,t,i):c(o,t))||i);return 3<n&&i&&Object.defineProperty(o,t,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),ServiciosComponent=function(){function e(e){var o=this;this._serviciosService=e,this.p=1,this.productos=[],e.obtenerProductos().then(function(e){o.listadoProducto=e,console.log(e),o.cargarProductos()}).catch(function(e){console.log(e)})}return e.prototype.ngOnInit=function(){},e.prototype.cargarProductos=function(){this.productos=this.listadoProducto},e=__decorate([core_1.Component({selector:"app-servicios",templateUrl:"./servicios.component.html",styles:[]})],e)}();exports.ServiciosComponent=ServiciosComponent;