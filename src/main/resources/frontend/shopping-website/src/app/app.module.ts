import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { CardComponent } from './card/card.component';
import { CounterComponent } from './counter/counter.component';
import { ManageVegetablesComponent } from './manage-vegetables/manage-vegetables.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginSignupTestComponent } from './login-signup-test/login-signup-test.component';
import { StepTestComponent } from './step-test/step-test.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    TestComponent,
    HomeComponent,
    VegetablesComponent,
    CardComponent,
    CounterComponent,
    ManageVegetablesComponent,
    CartComponent,
    LoginSignupTestComponent,
    StepTestComponent,
    AppHeaderComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
