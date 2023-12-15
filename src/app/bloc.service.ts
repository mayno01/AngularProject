import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from '../models/bloc.model'; 
@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private baseUrl = 'http://localhost:8080/blocs'; 

  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.baseUrl}/all`);
  }

  deleteBloc(idBloc: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${idBloc}`);
  }
  
  addbloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.baseUrl}/add`, bloc);
  }
  updateBloc(bloc:Bloc, id: number): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.baseUrl}/update/${id}`, bloc);
  }
  getblocById(idBloc: number): Observable<Bloc> {
    return this.http.get<Bloc>(`${this.baseUrl}/${idBloc}`);
  }
 
  affecterBlocAFoyer(idBloc: number, idFoyer: number): Observable<any> {
    const url = `${this.baseUrl}/affecterBlocAFoyer/${idBloc}/${idFoyer}`;
    return this.http.put(url, {});
  }
  assignChambresToBloc(numeroChambre: number[], blocId: number): Observable<Bloc> {
    const url = `${this.baseUrl}/assign-chambres/${blocId}`;
    return this.http.put<Bloc>(url, numeroChambre);
  }
}

