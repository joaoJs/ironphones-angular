import { Component, OnInit } from '@angular/core';
import { PhoneApiService } from '../../services/phone-api.service';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  isFormOn = false;

  phones: any[] = [];

  userInfo: any;

  constructor(
    private phoneThang: PhoneApiService,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.phoneThang.getPhones()
      .subscribe(
        (list: any[]) => {
          this.phones = list;
        }
      );

    this.authThang.getLoginStatus()
      .subscribe(
        (yes: any) => {
          if (yes.isLoggedIn) {
            this.userInfo = yes.userInfo;
          }
        }
      )
  }

  showForm() {
    this.isFormOn = !this.isFormOn;
  }

  handleNewPhone(phone) {
    this.phones.unshift(phone);
    this.isFormOn = false;
  }

}
