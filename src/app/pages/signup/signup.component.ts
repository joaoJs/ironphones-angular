import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupInfo } from '../../interfaces/signup-info';
import { AuthApiService } from '../../services/auth-api.service';

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

  errorMessage: string = '';

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

}
