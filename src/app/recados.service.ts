import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecadoModel } from './recado.model';

@Injectable({
  providedIn: 'root',
})
export class RecadosService {
  //irá fazer as chamadas
  constructor(private http: HttpClient) {}

  cadastrarRecado(recado: RecadoModel): Observable<any> {
    return this.http.post('http://localhost:3000/recados/', recado);
  }

  listarRecados(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/recados/');
  }
}
