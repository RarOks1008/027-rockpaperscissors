import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaymodeComponent } from './playmode.component';

describe('PlaymodeComponent', () => {
  let component: PlaymodeComponent;
  let fixture: ComponentFixture<PlaymodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaymodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
