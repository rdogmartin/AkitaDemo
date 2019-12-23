import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CurrentUser } from 'src/app/models/current-user.model';

import { CurrentUserStore } from './current-user.store';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserQuery extends Query<CurrentUser> {
  isLoggedIn$ = this.select(state => !!state.username);

  constructor(protected store: CurrentUserStore) {
    super(store);
  }
}
