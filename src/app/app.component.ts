import { Component } from '@angular/core';

// Servicios
import {UsuariosService} from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';
  constructor(
    private servicioUsuarios: UsuariosService
  ) {
    this.servicioUsuarios.obtenerUsuarios().subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log('Error en el appComponent:', error);
      }
    );
  }
}
