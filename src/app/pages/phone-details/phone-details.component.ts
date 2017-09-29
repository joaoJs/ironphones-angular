import { Component, OnInit } from '@angular/core';
import { PhoneApiService } from '../../services/phone-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phoneInfo: any = {};

  constructor(
    private phoneThang: PhoneApiService,
    private activatedThang: ActivatedRoute
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

  }

}
