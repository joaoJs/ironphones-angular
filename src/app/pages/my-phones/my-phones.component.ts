import { Component, OnInit } from '@angular/core';
import { PhoneApiService } from '../../services/phone-api.service';

@Component({
  selector: 'app-my-phones',
  templateUrl: './my-phones.component.html',
  styleUrls: ['./my-phones.component.css']
})
export class MyPhonesComponent implements OnInit {

  myPhones: any[] = [];

  errorMessage: string = '';

  constructor(
    private phoneService: PhoneApiService
  ) { }

  ngOnInit() {
    this.phoneService.getMyPhones()
      .subscribe(
        (data: any) => {
          console.log('Success my phones ---> ', data);
          this.myPhones = data;
        },
        (err) => {
          if (err.status === 401) {
            this.errorMessage = "You need to be logged in.";
          }
          else {
            this.errorMessage = "Something went wrong. Try again later."
          }
        }
      )
  }

}
