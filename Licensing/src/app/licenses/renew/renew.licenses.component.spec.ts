import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewLicensesComponent } from './renew.licenses.component';

describe('RenewLicensesComponent', () => {
  let component: RenewLicensesComponent;
  let fixture: ComponentFixture<RenewLicensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewLicensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
