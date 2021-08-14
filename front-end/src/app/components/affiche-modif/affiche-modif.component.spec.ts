import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheModifComponent } from './affiche-modif.component';

describe('AfficheModifComponent', () => {
  let component: AfficheModifComponent;
  let fixture: ComponentFixture<AfficheModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
