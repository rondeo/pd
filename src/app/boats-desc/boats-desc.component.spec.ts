import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsDescComponent } from './boats-desc.component';

describe('BoatsDescComponent', () => {
  let component: BoatsDescComponent;
  let fixture: ComponentFixture<BoatsDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatsDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatsDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
