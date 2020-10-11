import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInspectorsPage } from './view-inspectors.page';

describe('ViewInspectorsPage', () => {
  let component: ViewInspectorsPage;
  let fixture: ComponentFixture<ViewInspectorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInspectorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInspectorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
