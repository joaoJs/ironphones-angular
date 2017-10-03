import { Component, OnInit } from '@angular/core';
import { PhoneApiService } from '../../services/phone-api.service';

@Component({
  selector: 'app-my-phones',
  templateUrl: './my-phones.component.html',
  styleUrls: ['./my-phones.component.css']
})
export class MyPhonesComponent implements OnInit {

  myPhones: any[] = [];

  constructor(
    private phoneService: PhoneApiService
  ) { }

  ngOnInit() {
    this.phoneService.getMyPhones()
      .subscribe(
        (data: any) => {
          console.log('Success my phones ---> ', data);
          this.myPhones = data;
        }
      )
  }

}
