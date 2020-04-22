import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SouthernPage } from './southern.page';

describe('SouthernPage', () => {
  let component: SouthernPage;
  let fixture: ComponentFixture<SouthernPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthernPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SouthernPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
