import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateCustomersComponent } from './activate.customers.component';

describe('ActivateCustomersComponent', () => {
  let component: ActivateCustomersComponent;
  let fixture: ComponentFixture<ActivateCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
