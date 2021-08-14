import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudStockComponent } from './crud-stock.component';

describe('CrudStockComponent', () => {
  let component: CrudStockComponent;
  let fixture: ComponentFixture<CrudStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
