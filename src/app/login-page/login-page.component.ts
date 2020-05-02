import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { apiservice } from '../services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {


  constructor(private _apiservice: apiservice, private router: Router) { }

  ngOnInit() {


  }

  userName: string;
  password: string;
  formError: string;
  serverError: string;
  users: any



  submitLogin(event) {
    event.preventDefault()

    if (this.userName && this.password) {
      this.serverError = ''
      this.formError = ''

      this._apiservice.loginDetails(this.userName, this.password)
        .subscribe(
          data => {
            if(data.id == 0 || data.id == null){
              this.serverError = data.AuthFailedMessage
            }
            else{
              this.users = data;
              this._apiservice.sendData(data)
              this.router.navigate(['/dashboard']);

            }

          },
          error => {
            error
            this.serverError = 'something went wrong'
          }
        );
    }
    else {
      this.formError = 'both the fields are required'
    }
  }

}
