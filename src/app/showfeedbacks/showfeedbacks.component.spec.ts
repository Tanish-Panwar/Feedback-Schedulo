import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfeedbacksComponent } from './showfeedbacks.component';

describe('ShowfeedbacksComponent', () => {
  let component: ShowfeedbacksComponent;
  let fixture: ComponentFixture<ShowfeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowfeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
