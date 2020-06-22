import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidator } from '../custom-validator';
import * as $ from "jquery";
import { RestService } from '../rest.service';

@Component({
  selector: 'app-step-test',
  templateUrl: './step-test.component.html',
  styleUrls: ['./step-test.component.css']
})
export class StepTestComponent implements OnInit {

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

  ngAfterViewInit() {
    // jQuery time
    var current_fs, next_fs, previous_fs; // fieldsets
    var left, opacity, scale; // fieldset properties which we will animate
    var animating; // flag to prevent quick multi-click glitches

    jQuery(".next").click(
      function () {
        if (animating) {
          return false;
        }
        animating = true;

        current_fs = jQuery(this).parent();
        next_fs = jQuery(this).parent().next();

        // activate next step on progressbar using the index of next_fs
        jQuery("#progressbar li").eq(jQuery("fieldset").index(next_fs)).addClass("active");

        // show the next fieldset
        next_fs.show();
        // hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now, mx) {
              // as the opacity of current_fs reduces to 0 - stored in "now"
              // 1. scale current_fs down to 80%
              scale = 1 - (1 - now) * 0.2;
              // 2. bring next_fs from the right(50%)
              left = (now * 50) + "%";
              // 3. increase opacity of next_fs to 1 as it moves in
              opacity = 1 - now;
              current_fs.css(
                {
                  'transform': 'scale(' + scale + ')',
                  'position': 'absolute'
                }
              );
              next_fs.css({ 'left': left, 'opacity': opacity });
            },
            duration: 800,
            complete: function () {
              current_fs.hide();
              current_fs.css({ 'position': 'relative' });
              next_fs.css({ 'position': 'relative' });
              animating = false;
            },
            // this comes from the custom easing plugin
            easing: 'easeInOutBack'
          }
        );
      }
    );

    jQuery(".previous").click(
      function () {
        if (animating) {
          return false;
        }
        animating = true;

        current_fs = jQuery(this).parent();
        previous_fs = jQuery(this).parent().prev();

        // de-activate current step on progressbar
        jQuery("#progressbar li").eq(jQuery("fieldset").index(current_fs)).removeClass("active");

        // show the previous fieldset
        previous_fs.show();
        previous_fs.css({ 'position': 'absolute' });

        // hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now, mx) {
              // as the opacity of current_fs reduces to 0 - stored in "now"
              // 1. scale previous_fs from 80% to 100%
              scale = 0.8 + (1 - now) * 0.2;
              // 2. take current_fs to the right(50%) - from 0%
              left = ((1 - now) * 50) + "%";
              // 3. increase opacity of previous_fs to 1 as it moves in
              opacity = 1 - now;
              current_fs.css({ 'left': left });
              previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
            },
            duration: 800,
            complete: function () {
              current_fs.hide();
              previous_fs.css({ 'position': 'relative' });
              animating = false;
            },
            // this comes from the custom easing plugin
            easing: 'easeInOutBack'
          }
        );
      }
    );

    jQuery(".submit").click(
      function () {
        return false;
      }
    );

  }

  isValid(formControlName) {
    return this.signUpForm.get(formControlName).invalid && (this.signUpForm.get(formControlName).dirty || this.signUpForm.get(formControlName).touched);
  }

  onSubmit(value) {
    console.log(value);
    this.restService.post("http://localhost:8080/user/save", this.signUpForm.value).subscribe(
      (data) => {
        console.log(data);
        alert('hurrey!!! \n proceed to login...')//TODO : change to login automatically by passing to parent that signup is done so that it can move to sign in.
        // this.router.navigate(['vegetables']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  isFormInValid() {
    return !this.signUpForm.valid;
  }


}


/*
Copyright (c) 2020 by David (https://codepen.io/bluestarstudios/pen/ZEGamYP)
Fork of an original work Multi Step Form with Progress Bar using jQuery and CSS3 (https://codepen.io/atakan/pen/gqbIz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/