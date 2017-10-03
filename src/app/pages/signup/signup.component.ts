import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupInfo } from '../../interfaces/signup-info';
import { AuthApiService } from '../../services/auth-api.service';
import { LoginInfo } from '../../interfaces/login-info';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser: SignupInfo = {
    signupFullName: '',
    signupUsername: '',
    signupPassword: ''
  }

  loginUser: LoginInfo = {
    loginUsername: '',
    loginPassword: ''
  };

  errorMessage: string = '';

  loginError: string = '';

  constructor(
    private apiService: AuthApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  signupSubmit() {
    this.apiService.postSignup(this.newUser)
      .subscribe(
        (data) => {
          this.routerThang.navigate(['']);
        },

        (err) => {
          console.log('Error ---> ', err);
          if (err.status === 400) {
            this.errorMessage = 'Validation Error';
          }
          else {
            this.errorMessage = "Something went wrong. Try again later."
          }
        }
      )
  } // signupSubmit()

  loginSubmit() {
    // call the service method for the login auth-api
    this.apiService.postLogin(this.loginUser)
      .subscribe(
        (data) => {
          console.log("Success Login ---> ", data);
          // redirect (navigate) home
          this.routerThang.navigate(['']);
        },

        (err) => {
          console.log(err);

          if (err.status === 401) {
            this.loginError = 'Bad Credentials';
          } else {
            this.loginError = 'Something went wrong. Try again later.';
          }
        }
      )
    //subscribe to the AJAX call
    // if success red to home pages
    // else show feedback
    // loginSubmit()
  }

}
