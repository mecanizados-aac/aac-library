import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseAacExampleComponent } from './showcase-aac-example.component';

describe('ShowcaseAacExampleComponent', () => {
  let component: ShowcaseAacExampleComponent;
  let fixture: ComponentFixture<ShowcaseAacExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseAacExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseAacExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
