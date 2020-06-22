import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupTestComponent } from './login-signup-test.component';

describe('LoginSignupTestComponent', () => {
  let component: LoginSignupTestComponent;
  let fixture: ComponentFixture<LoginSignupTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSignupTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
