import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCommercialComponent } from './login-commercial.component';

describe('LoginCommercialComponent', () => {
  let component: LoginCommercialComponent;
  let fixture: ComponentFixture<LoginCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
