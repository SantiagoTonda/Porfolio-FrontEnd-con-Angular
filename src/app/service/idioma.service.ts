import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  URL = environment.URL + 'idioma/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Idioma>{
    return this.httpClient.get<Idioma>(this.URL + `detail/${id}`);
  }

  public save(idioma: Idioma): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', idioma);
  }

  public update(id: number, idioma: Idioma): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, idioma);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}
