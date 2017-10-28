import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateLicensesComponent } from './activate.licenses.component';

describe('ActivateLicensesComponent', () => {
  let component: ActivateLicensesComponent;
  let fixture: ComponentFixture<ActivateLicensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateLicensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
