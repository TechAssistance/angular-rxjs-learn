import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Example api url
  private apiUrl = 'https://api.example.com/data';

  // Inject HttpClient into the service
  constructor(private http: HttpClient) {}

  getName(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError), // Handle errors
    );
  }
  // Error handling function
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
