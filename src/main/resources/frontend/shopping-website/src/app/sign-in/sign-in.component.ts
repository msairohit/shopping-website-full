import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private restService: RestService, private router: Router) { }

  ngOnInit() {

    this.signInForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit() {

  }

  isValid(formControlName) {
    return this.signInForm.get(formControlName).invalid && (this.signInForm.get(formControlName).dirty || this.signInForm.get(formControlName).touched);
  }

  isFormInValid() {
    return !(this.signInForm.get('userName').dirty || this.signInForm.get('userName').touched) &&
      !(this.signInForm.get('password').dirty || this.signInForm.get('password').touched)
    // return !this.signInForm.valid;
  }

  onSubmit() {
    console.log(this.signInForm);
    this.restService.get("http://localhost:8080/login/" + this.signInForm.value.userName + "/" + this.signInForm.value.password).subscribe(
      (data) => {
        console.log(data);
        if (data == true) {
          console.log("login success");
          localStorage.setItem("userName", this.signInForm.value.userName);
          localStorage.setItem("isUserLoggedIn", "true");
          this.router.navigate(['vegetables']);
        } else {
          alert("invalid userName/Password \n Try to remember harder!!!");
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onForgetPassword() {
    alert("to be implemented \n forget password");
  }

}
