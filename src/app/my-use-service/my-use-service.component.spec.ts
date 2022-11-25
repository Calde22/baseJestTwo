import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUseServiceComponent } from './my-use-service.component';

describe('MyUseServiceComponent', () => {
  let component: MyUseServiceComponent;
  let fixture: ComponentFixture<MyUseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyUseServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
