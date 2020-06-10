import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import { StorageModule } from '@ngx-pwa/local-storage';
// import { DemoMaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import { DemoMaterialModule } from './material/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCarComponent } from './list-car/list-car.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { LoginComponent, LoginFailedDialog, EmailFailedDialog, EmailSucssessDialog  } from './login/login.component';
import { RegisterComponent, RegisterFailedDialog, RegisterSucsessDialog  } from './register/register.component';
import { ContactComponent, ContactSuccessDialog } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SliderComponent } from './common/slider/slider.component';
import {MatRadioModule} from '@angular/material'


import { CONFIG } from './list-car/config';
import { AgmCoreModule } from '@agm/core';
import { SuccessBookingComponent } from './success-booking/success-booking.component';
import { TestComponent } from './test/test.component';
import {MatStepperModule,  MatButtonModule} from '@angular/material'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ListCarComponent,
    BookingFormComponent,
    ChangePasswordComponent ,
    ConfirmEmailComponent ,
    LoginComponent ,
    RegisterComponent ,
    LoginFailedDialog,
    RegisterFailedDialog,
    RegisterSucsessDialog,
    EmailFailedDialog,
    EmailSucssessDialog,
    ContactComponent,
    ContactSuccessDialog,
    UserProfileComponent,
    SliderComponent,
    SuccessBookingComponent,
    TestComponent
  ],
  imports: [
    MatStepperModule,  MatButtonModule,
    NgxSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // MaterialModule,
    MatDialogModule,
    DemoMaterialModule,
    AgmCoreModule.forRoot({
      apiKey: CONFIG.GOOGLE_API_KEY,
      libraries: ['places', 'geometry']
  }),
    // StorageModule.forRoot({
    //   IDBNoWrap: true,
    // })
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginFailedDialog,
    RegisterFailedDialog,
    RegisterSucsessDialog,
    EmailFailedDialog,
    EmailSucssessDialog,
    ContactSuccessDialog
  ]
})
export class AppModule { }
