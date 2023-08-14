import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedpostsComponent } from './missedposts.component';

describe('MissedpostsComponent', () => {
  let component: MissedpostsComponent;
  let fixture: ComponentFixture<MissedpostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissedpostsComponent]
    });
    fixture = TestBed.createComponent(MissedpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
