import { Component, OnInit } from '@angular/core';
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

  constructor(
    private apiService: AuthApiService
  ) { }

  ngOnInit() {
  }

  signupSubmit() {

  }

}
