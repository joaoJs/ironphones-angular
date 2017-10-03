import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneListComponent } from './pages/phone-list/phone-list.component';
import { PhoneDetailsComponent } from './pages/phone-details/phone-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MyPhonesComponent } from './pages/my-phones/my-phones.component';

const routes: Routes = [
  { path: '',              component: PhoneListComponent },
  { path: 'phone/:id',     component: PhoneDetailsComponent },
  { path: 'signup',        component: SignupComponent},
  { path: 'login',         component: SignupComponent},
  { path: 'myphones',      component: MyPhonesComponent },
  { path: '**',            component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
