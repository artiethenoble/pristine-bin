import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAreaComponent } from './screen-area.component';

describe('ScreenAreaComponent', () => {
  let component: ScreenAreaComponent;
  let fixture: ComponentFixture<ScreenAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
