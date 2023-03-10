import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import {OKTA_AUTH} from '@okta/okta-angular'
import { OktaAuth } from '@okta/okta-auth-js'


@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {


  isAuthenticated: boolean = false;
  userFullName: string = '';


  constructor(private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  ngOnInit(): void {

    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated!;
        this.getUserDetails();
      }
    )
  }
  getUserDetails() {
    if (this.isAuthenticated){

      // Fetch the logged in user details (users claims)

      //

      // user full name is exposed as a property name
      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name as string;
        }
      )

    }

  }

  logout() {
    // Terminates the session with Okta and removes cureent tokens.
    this.oktaAuth.signOut();
  }

}
