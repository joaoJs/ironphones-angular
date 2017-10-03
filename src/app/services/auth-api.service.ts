import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupInfo } from '../interfaces/signup-info';
import { LoginInfo } from '../interfaces/login-info';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AuthApiService {

  baseUrl: string = 'http://localhost:3000';

  // the thing that receive the changes
  loginStatusSubject = new BehaviorSubject<any>({isLoggedIn: false});

  // the thing that broadcasts the changes
  loginStatusNotifier = this.loginStatusSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  postSignup(userInfo: SignupInfo) {
    const signUpRequest =
      this.http.post(
      this.baseUrl + '/api/process-signup',
      userInfo,
      { withCredentials: true }
    );

    signUpRequest.subscribe(
      (user) => {
        this.loginStatusSubject.next({
          isLoggedIn: true,
          userInfo: userInfo
        });
      }
    );

    return signUpRequest;
  }

  getLoginStatus() {
    const loginStatusRequest =
      this.http.get(
      this.baseUrl + '/api/checklogin',
      { withCredentials: true }
    );

    loginStatusRequest.subscribe(
      (user) => {
        this.loginStatusSubject.next(
          user
        );
      }
    )
    return loginStatusRequest;
  }

  

  postLogin(info: LoginInfo) {
    const loginRequest =
      this.http.post(
      this.baseUrl + '/api/process-login',
      info,
      { withCredentials: true }
    );

    loginRequest.subscribe(
      (user) => {
        this.loginStatusSubject.next({
          isLoggedIn: true,
          userInfo: user
        });
      }
    );

    return loginRequest;


  }

  logOut() {
    const logoutRequest =
      this.http.post(
      this.baseUrl + '/api/logout',
      { withCredentials: true }
    );

    logoutRequest.subscribe(
      () => {
        this.loginStatusSubject.next(
          { isLoggedIn: false }
        );
      }
    )

    return logoutRequest;
  }

}
