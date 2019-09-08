import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private servicioHttp: HttpClient
  ) { }

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Fernando Herrera');
    return this.servicioHttp.get('https://reqres.inxx/api/user', { params }).pipe(
      map(
        (respuesta: any) => {
          return respuesta.data;
        }
      )
    );
}
}
