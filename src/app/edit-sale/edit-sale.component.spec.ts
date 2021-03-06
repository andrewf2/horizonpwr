import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaleComponent } from './edit-sale.component';

describe('EditSaleComponent', () => {
  let component: EditSaleComponent;
  let fixture: ComponentFixture<EditSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
