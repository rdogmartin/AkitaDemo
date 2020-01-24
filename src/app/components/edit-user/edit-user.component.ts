import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUser } from 'src/app/models/current-user.model';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { CurrentUserQuery } from 'src/app/state/current-user/current-user.query';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  currentUser$: Observable<CurrentUser> = this.currentUserQuery.select();

  constructor(
    private authorizationService: AuthorizationService,
    private currentUserQuery: CurrentUserQuery,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  onSubmit(userName: string) {
    this.authorizationService.changeUserName(userName);
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
