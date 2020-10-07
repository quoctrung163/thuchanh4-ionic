import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailuserPage } from './detailuser.page';

describe('DetailuserPage', () => {
  let component: DetailuserPage;
  let fixture: ComponentFixture<DetailuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
