import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Pasó por el interceptor');
    const headers = new HttpHeaders({
      'token-usuario': 'Abcdefghakljlñkj789495784'
    });
    // Clonamos la request antes de tocarla, porque si se toca ya no funciona.
    // El propio método clone nos permite hacer un update del objeto.
    const reqClonada = req.clone({
      headers
    });
    return next.handle(reqClonada).pipe(
      catchError(this.manejarError)
    );
  }
  manejarError(err: HttpErrorResponse) {
    console.log('Sucedió un error');
    console.log('Error registrado en el log');
    console.warn(err);
    return throwError('Error personalizado');
  }

}
