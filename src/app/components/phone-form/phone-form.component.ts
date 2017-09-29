import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PhoneInfo } from '../../interfaces/phone-info';
import { PhoneApiService } from '../../services/phone-api.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  errorMessage: string;

  // notifies the parent when a phone is successfully added
  @Output() newPhoneNotifier = new EventEmitter();

  newPhone: PhoneInfo = {
    name:  '',
    brand:  '',
    image:   '',
    specs:  []
  }

  constructor(
    private phoneThang: PhoneApiService
  ) { }

  ngOnInit() {
  }

  saveNewPhone() {
    this.phoneThang.postPhone(this.newPhone)
      .subscribe(
        (phone) => {
          console.log(phone);

          this.newPhoneNotifier.emit(phone);
          
          this.errorMessage = '';
          this.newPhone = {
            name: '' ,
            brand:  '',
            image:   '',
            specs:  []
          };
        },

        (err) => {
          console.log("new phone error --> ", err);

          if (err.status === 400) {
            this.errorMessage = "Validation error.";
          }
          else {
            this.errorMessage = 'Unknwon error. Try Again later.';
          }
        }


      )
  }

}
