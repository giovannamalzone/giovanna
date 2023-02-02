import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  //irá fazer as chamadas
  constructor(private http: HttpClient) {}

  listarNews(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/news/');
  }
}
