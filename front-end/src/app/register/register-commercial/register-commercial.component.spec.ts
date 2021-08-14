import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCommercialComponent } from './register-commercial.component';

describe('RegisterCommercialComponent', () => {
  let component: RegisterCommercialComponent;
  let fixture: ComponentFixture<RegisterCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
