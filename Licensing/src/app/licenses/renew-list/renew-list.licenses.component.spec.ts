import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewListLicensesComponent } from './renew-list.licenses.component';

describe('RenewListLicensesComponent', () => {
  let component: RenewListLicensesComponent;
  let fixture: ComponentFixture<RenewListLicensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewListLicensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewListLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
