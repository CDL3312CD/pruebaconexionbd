import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import {Prueba} from './prueba'



@Injectable({
  providedIn: 'root'
})
export class PhpConexionService {
  rutaApi: string='https://localhost/prueba/'

  constructor(private http: HttpClient) {}

  obtener() {
    return this.http.get(`${this.rutaApi}/obtenerPersonas.php`);
  }

  registrar(persona: Prueba) {
    return this.http.post(`${this.rutaApi}/registrarPersona.php`, persona);
  }

  actualizar(persona: Prueba) {
    return this.http.put(`${this.rutaApi}/actualizarPersona.php`, persona);
  }

  eliminar(id: string | number) {
    return this.http.delete(`${this.rutaApi}/eliminarPersona.php?id=${id}`);
  }
}
