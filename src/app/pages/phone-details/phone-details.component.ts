import { Component, OnInit } from '@angular/core';
import { PhoneApiService } from '../../services/phone-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phoneInfo: any = {};
  userInfo: any;

  constructor(
    private phoneThang: PhoneApiService,
    private activatedThang: ActivatedRoute,
    private routerThang: Router,
    private authApi: AuthApiService
  ) { }

  ngOnInit() {
    this.activatedThang.params
      .subscribe(
        (params) => {
          this.phoneThang.getPhoneDetails(params.id)
            .subscribe(
              (phone) => {
                this.phoneInfo = phone;
              }
            )
        }
      )

      this.authApi.getLoginStatus()
        .subscribe(
          (yes: any) => {
            if (yes.isLoggedIn) {
              this.userInfo = yes.userInfo;
            }
          }
        )

  }

  askForDeletion() {
    this.phoneThang.deletePhone(this.phoneInfo._id)
      .subscribe(
        () => {
            this.routerThang.navigate(['']);
        }
      );
  }

}
