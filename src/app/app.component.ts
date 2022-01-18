import { Component } from '@angular/core';
import { PhpConexionService } from './php-conexion.service';
import {Prueba} from './prueba'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  respuesta = {};

  constructor(private phpconexionService:  PhpConexionService) {}

  probarGet() {
    this.respuesta = { mensaje: "Cargando..." };
    this.phpconexionService
    .obtener()
    .subscribe((pruebas: Prueba) => {
      this.respuesta = pruebas;
      console.log(pruebas);
    });
  }
  probarPost() {
    let prueba = new Prueba();
    this.respuesta = { mensaje: "Cargando..." };
    this.phpconexionService.registrar(prueba).subscribe(datos => {
      this.respuesta = datos;
    });
  }
  probarPut() {
    let prueba = new Prueba();
    this.respuesta = { mensaje: "Cargando..." };
    this.phpconexionService.actualizar(prueba).subscribe(datos => {
      this.respuesta = datos;
    });
  }
  probarDelete() {
    let idprueba = 281196;
    this.respuesta = { mensaje: "Cargando..." };
    this.phpconexionService.eliminar(idprueba).subscribe(datos => {
      this.respuesta = datos;
    });
  }
}
