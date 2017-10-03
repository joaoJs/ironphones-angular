import { Component } from '@angular/core';
import { AuthApiService } from './services/auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private apiService: AuthApiService,
    private router: Router
  ) {

  }

  logMeOut() {
    // call log out API method
    this.apiService.logOut()
      .subscribe(
        (data) => {
          console.log('Log Out Success! ---> ', data);
          this.router.navigate(['/login']);
        }
      )
    // subscribe to AJAX call..
    // if success, redirect to login?
  }
}
