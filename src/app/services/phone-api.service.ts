import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {PhoneInfo } from '../interfaces/phone-info';

@Injectable()
export class PhoneApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  getPhones() {
    return this.httpThang.get(this.baseUrl + '/api/phones');
  }

  getPhoneDetails(id: string) {
    return this.httpThang.get(this.baseUrl + '/api/phones/' + id);
  }

  postPhone(phoneObj: PhoneInfo) {
    return this.httpThang.post(
      this.baseUrl + '/api/phones', phoneObj, { withCredentials: true }
    )
  }

  deletePhone(id: string) {
    return this.httpThang.delete(
      this.baseUrl + '/api/phones/' + id,
      { withCredentials: true }
    );
  }

  getMyPhones() {
    return this.httpThang.get(
      this.baseUrl + '/api/myphones',
      { withCredentials: true }
    );
  }

}
