import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CurrentUserQuery } from '../state/current-user/current-user.query';
import { CurrentUserStore } from '../state/current-user/current-user.store';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  get isLoggedIn$(): Observable<boolean> {
    return this.currentUserQuery.isLoggedIn$;
  }

  constructor(
    private currentUserQuery: CurrentUserQuery,
    private currentUserStore: CurrentUserStore,
  ) { }

  public signIn(username: string): Observable<boolean> {
    return this.authenticateUser(username)
      .pipe(
        tap(isAuthenticated => {
          if (isAuthenticated) {
            this.currentUserStore.update({ username });
          }
        })
      );
  }

  public signOut() {
    this.currentUserStore.update({ username: null });
  }

  private authenticateUser(username: string): Observable<boolean> {
    // In a real app, this will probably make an HTTP call.
    return of(true);
  }
}
