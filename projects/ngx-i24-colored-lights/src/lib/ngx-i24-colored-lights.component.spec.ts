import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxI24ColoredLightsComponent } from './ngx-i24-colored-lights.component';

describe('NgxI24ColoredLightsComponent', () => {
  let component: NgxI24ColoredLightsComponent;
  let fixture: ComponentFixture<NgxI24ColoredLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxI24ColoredLightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxI24ColoredLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
