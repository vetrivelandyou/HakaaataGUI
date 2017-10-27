import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightnavBarComponent } from './rightnav-bar.component';

describe('RightnavBarComponent', () => {
  let component: RightnavBarComponent;
  let fixture: ComponentFixture<RightnavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightnavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightnavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
