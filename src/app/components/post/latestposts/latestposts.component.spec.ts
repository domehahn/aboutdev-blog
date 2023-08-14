import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestpostsComponent } from './latestposts.component';

describe('LatestpostsComponent', () => {
  let component: LatestpostsComponent;
  let fixture: ComponentFixture<LatestpostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestpostsComponent]
    });
    fixture = TestBed.createComponent(LatestpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
