import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayermodeComponent } from './playermode.component';

describe('PlayermodeComponent', () => {
  let component: PlayermodeComponent;
  let fixture: ComponentFixture<PlayermodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayermodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayermodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
