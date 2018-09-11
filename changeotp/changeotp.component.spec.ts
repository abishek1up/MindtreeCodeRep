import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeotpComponent } from './changeotp.component';

describe('ChangeotpComponent', () => {
  let component: ChangeotpComponent;
  let fixture: ComponentFixture<ChangeotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
