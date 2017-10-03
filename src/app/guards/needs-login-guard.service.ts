import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';

import { AuthApiService } from '../services/auth-api.service';

@Injectable()
export class NeedsLoginGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthApiService
  ) { }

  canActivate() {
    return this.authService.getLoginStatus()
      .map(
        (user: any) => {
          if (user.isLoggedIn) {
            return true;
          }
          else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      )
    //this.router.navigate(['login']);
    //return false;
  }

}
