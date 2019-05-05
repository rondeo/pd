import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsTitleComponent } from './boats-title.component';

describe('BoatsTitleComponent', () => {
  let component: BoatsTitleComponent;
  let fixture: ComponentFixture<BoatsTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatsTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
