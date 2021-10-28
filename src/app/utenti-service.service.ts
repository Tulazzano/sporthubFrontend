import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from 'src/utente';

@Injectable({
  providedIn: 'root'
})
export class UtentiServiceService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  getUtenti(): Observable<Utente[]>{
    return this.http.get<Utente[]>("http://localhost:8080/user/all")
  }


  add(checkoutForm: Utente): Observable<Utente> {

    console.log(checkoutForm);
    return this.http.post<Utente>("http://localhost:8080/user/add", checkoutForm);
  }

  deleteUser(id: number): Observable<Utente> {
    return this.http.get<Utente>("http://localhost:8080/user/deleteUser/{id}")
  }
}

