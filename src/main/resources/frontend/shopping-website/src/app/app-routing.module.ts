import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { ManageVegetablesComponent } from './manage-vegetables/manage-vegetables.component';
import { CartComponent } from './cart/cart.component';
import { LoginSignupTestComponent } from './login-signup-test/login-signup-test.component';
import { StepTestComponent } from './step-test/step-test.component';
import { UserLoggedInGuardService } from './user-logged-in-guard.service';


const routes: Routes = [
  {path : '', redirectTo : '/testLogin', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'test', component : TestComponent},
  {path : 'signUp', component : SignUpComponent},
  {path : 'vegetables', component : VegetablesComponent, canActivate : [UserLoggedInGuardService]},
  {path : 'manage/vegetables', component : ManageVegetablesComponent, canActivate : [UserLoggedInGuardService]},
  {path : 'cart', component : CartComponent, canActivate : [UserLoggedInGuardService]},
  {path : 'testLogin', component : LoginSignupTestComponent},
  {path : 'step', component : StepTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
