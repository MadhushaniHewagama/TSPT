import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualTicketPage } from './manual-ticket.page';

describe('ManualTicketPage', () => {
  let component: ManualTicketPage;
  let fixture: ComponentFixture<ManualTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualTicketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
