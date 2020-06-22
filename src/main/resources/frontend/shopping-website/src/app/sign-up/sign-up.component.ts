import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../custom-validator';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private restService : RestService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(5)]],
      password: ['', Validators.compose([
        Validators.required,
        // check whether the entered password has a number
        CustomValidator.patternValidator(/\d/, {
          hasNumber: true
        }),
        // check whether the entered password has upper case letter
        CustomValidator.patternValidator(/[A-Z]/, {
          hasCapitalCase: true
        }),
        // check whether the entered password has a lower case letter
        CustomValidator.patternValidator(/[a-z]/, {
          hasSmallCase: true
        }),
        // check whether the entered password has a special character
        CustomValidator.patternValidator(
          /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          {
            hasSpecialCharacters: true
          }
        ),
        Validators.minLength(8)
      ])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      // city: [''],
      // state: [''],
      // zip: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.max(9999999999), Validators.min(10), Validators.pattern('[0-9]{10}')]]
    }, {
      // check whether our password and confirm password match
      validator: CustomValidator.passwordMatchValidator
    });
  }

  isValid(formControlName) {
    return this.signUpForm.get(formControlName).invalid && (this.signUpForm.get(formControlName).dirty || this.signUpForm.get(formControlName).touched);
  }

  onSubmit(value) {
    console.log(value);
  }

}
