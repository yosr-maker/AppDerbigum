import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitExpirerComponent } from './produit-expirer.component';

describe('ProduitExpirerComponent', () => {
  let component: ProduitExpirerComponent;
  let fixture: ComponentFixture<ProduitExpirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitExpirerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitExpirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
