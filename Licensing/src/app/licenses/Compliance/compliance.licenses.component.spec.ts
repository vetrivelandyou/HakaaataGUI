import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceLicensesComponent } from './compliance.licenses.component';

describe('ComplianceLicensesComponent', () => {
  let component: ComplianceLicensesComponent;
  let fixture: ComponentFixture<ComplianceLicensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceLicensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
