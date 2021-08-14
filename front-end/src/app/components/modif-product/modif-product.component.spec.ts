import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProductComponent } from './modif-product.component';

describe('ModifProductComponent', () => {
  let component: ModifProductComponent;
  let fixture: ComponentFixture<ModifProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
