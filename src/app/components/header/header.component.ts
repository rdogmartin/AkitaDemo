import { Component } from '@angular/core';
import { CurrentUser } from 'src/app/models/current-user.model';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { CurrentUserQuery } from 'src/app/state/current-user/current-user.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // currentUser: CurrentUser = this.currentUserQuery.getValue();
  currentUser$: Observable<CurrentUser> = this.currentUserQuery.select();

  constructor(
    private authorizationService: AuthorizationService,
    private currentUserQuery: CurrentUserQuery,
    ) { }

  signOut() {
    this.authorizationService.signOut();
  }
}
