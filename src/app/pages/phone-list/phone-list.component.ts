import { Component, OnInit } from '@angular/core';
import { PhoneApiService } from '../../services/phone-api.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  isFormOn = false;

  phones: any[] = [];

  constructor(
    private phoneThang: PhoneApiService
  ) { }

  ngOnInit() {
    this.phoneThang.getPhones()
      .subscribe(
        (list: any[]) => {
          this.phones = list;
        }
      );
  }

  showForm() {
    this.isFormOn = !this.isFormOn;
  }

  handleNewPhone(phone) {
    this.phones.unshift(phone);
    this.isFormOn = false;
  }

}
