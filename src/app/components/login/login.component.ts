import { Component, Inject, OnInit } from '@angular/core';
import myAppConfig from 'src/app/config/my-app-config';
import {OKTA_AUTH} from '@okta/okta-angular'
import { OktaAuth } from '@okta/okta-auth-js'

import OktaSignIn from '@okta/okta-signin-widget'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  oktaSignin: any;

  constructor() {

   }

  ngOnInit(): void {


  }

}
