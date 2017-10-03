import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupInfo } from '../interfaces/signup-info';
import { LoginInfo } from '../interfaces/login-info';

@Injectable()
export class AuthApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  postSignup(userInfo: SignupInfo) {
    return this.http.post(
      this.baseUrl + '/api/process-signup',
      userInfo,
      { withCredentials: true }
    );
  }

  getLoginStatus() {
    return this.http.get(
      this.baseUrl + '/api/checklogin',
      {withCredentials: true}
    )
  }

  checkLoginStatus() {
    return this.http.get(
      this.baseUrl + '/api/checklogin',
      { withCredentials: true }
    );
  }

  postLogin(info: LoginInfo) {
    return this.http.post(
      this.baseUrl + '/api/process-login',
      info,
      {withCredentials: true}
    )
  }

  logOut() {
    return this.http.delete(
      this.baseUrl + '/api/logout',
      { withCredentials: true }
    );
  }

}
