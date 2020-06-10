import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SliderComponent } from './common/slider/slider.component';
import { IndexComponent } from './index/index.component';
import { ListCarComponent } from './list-car/list-car.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { LoginComponent, LoginFailedDialog, EmailFailedDialog, EmailSucssessDialog  } from './login/login.component';
import { RegisterComponent, RegisterFailedDialog, RegisterSucsessDialog  } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SuccessBookingComponent } from './success-booking/success-booking.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "", component:  IndexComponent},
  { path: "index", component:  IndexComponent},
  { path: 'change', component: ChangePasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirm', component: ConfirmEmailComponent },
  { path: "header", component: HeaderComponent },
  // { path: "footer", component: FooterComponent },
  // { path: "slider", component: SliderComponent },
  { path: "list-car", component:  ListCarComponent},
  { path: "booking-form", component:  BookingFormComponent},
  { path: "login", component:  LoginComponent},
  { path: "user-profile", component: UserProfileComponent },
  { path: "contact", component: ContactComponent },
  { path: "success-booking", component: SuccessBookingComponent },
  { path: "test", component: TestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
