import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClick(username: string) {
    this.authorizationService.signIn(username)
      .subscribe(isAuthorized => {
        if (isAuthorized) {
          this.router.navigate(['/']);
        } else {
          alert('auth error');
        }
      });
  }
}
