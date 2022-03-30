import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseAacPipeJoinComponent } from './showcase-aac-pipe-join.component';

describe('ShowcaseAacPipeJoinComponent', () => {
  let component: ShowcaseAacPipeJoinComponent;
  let fixture: ComponentFixture<ShowcaseAacPipeJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseAacPipeJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseAacPipeJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
