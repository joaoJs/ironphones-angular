import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhoneApiService } from './services/phone-api.service';
import { FormsModule } from '@angular/forms';
import { AuthApiService } from './services/auth-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './pages/phone-list/phone-list.component';
import { PhoneDetailsComponent } from './pages/phone-details/phone-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    NotFoundComponent,
    PhoneFormComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PhoneApiService,
              AuthApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
