import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  apiURL = 'http://localhost:3001';
  createUser(user: any) {
    console.log('In service angular',user)
    return this.http.post<any>(this.apiURL+'/user',user)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Une erreur s\'est produite lors de la requête :', error);
          return throwError(error);
        })
      );
  }







}
