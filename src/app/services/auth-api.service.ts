import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupInfo } from '../interfaces/signup-info';

@Injectable()
export class AuthApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  postSignup(userInfo: SignupInfo) {
    return this.http.post(
      this.baseUrl + '/api/process-signup',
      userInfo
    );
  }

}
