import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTokenPage } from './request-token.page';

describe('RequestTokenPage', () => {
  let component: RequestTokenPage;
  let fixture: ComponentFixture<RequestTokenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTokenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTokenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
