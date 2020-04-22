import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegendaryPage } from './legendary.page';

describe('LegendaryPage', () => {
  let component: LegendaryPage;
  let fixture: ComponentFixture<LegendaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegendaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
