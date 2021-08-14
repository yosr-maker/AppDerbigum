import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireModifComponent } from './formulaire-modif.component';

describe('FormulaireModifComponent', () => {
  let component: FormulaireModifComponent;
  let fixture: ComponentFixture<FormulaireModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
