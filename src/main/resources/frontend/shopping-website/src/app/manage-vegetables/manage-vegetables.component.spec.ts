import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVegetablesComponent } from './manage-vegetables.component';

describe('ManageVegetablesComponent', () => {
  let component: ManageVegetablesComponent;
  let fixture: ComponentFixture<ManageVegetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVegetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
