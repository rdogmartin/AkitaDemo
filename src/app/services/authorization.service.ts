import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  public signIn(username: string): Observable<boolean> {
    console.log('authenticating ' + username);
    return this.authenticateUser(username);
  }

  private authenticateUser(username: string): Observable<boolean> {
    // In a real app, this will probably make an HTTP call.
    return of(true);
  }
}
