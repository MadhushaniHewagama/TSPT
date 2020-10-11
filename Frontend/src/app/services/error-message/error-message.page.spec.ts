import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessagePage } from './error-message.page';

describe('ErrorMessagePage', () => {
  let component: ErrorMessagePage;
  let fixture: ComponentFixture<ErrorMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
