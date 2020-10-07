import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowAllUserPage } from './show-all-user.page';

describe('ShowAllUserPage', () => {
  let component: ShowAllUserPage;
  let fixture: ComponentFixture<ShowAllUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowAllUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
