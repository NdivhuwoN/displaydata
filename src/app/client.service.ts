import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import {  map } from 'rxjs/operators';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient,
    private clientsUrl = 'api/cliets'){}; 

    
getClients(): Observable<Client[]> {
  return this.http.get<Client[]>(this.clientsUrl//)
    //.pipe(
    //  catchError(this.handleError<Client[]>('getClients', []))
    );
}

}
