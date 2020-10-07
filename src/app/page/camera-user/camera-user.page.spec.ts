import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CameraUserPage } from './camera-user.page';

describe('CameraUserPage', () => {
  let component: CameraUserPage;
  let fixture: ComponentFixture<CameraUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CameraUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
