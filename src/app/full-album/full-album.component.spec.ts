import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullAlbumComponent } from './full-album.component';

describe('FullAlbumComponent', () => {
  let component: FullAlbumComponent;
  let fixture: ComponentFixture<FullAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
