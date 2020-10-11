import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditPage } from './add-credit.page';

describe('AddCreditPage', () => {
  let component: AddCreditPage;
  let fixture: ComponentFixture<AddCreditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
