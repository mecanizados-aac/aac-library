import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AacExampleComponent } from './aac-example.component';

describe('AacExampleComponent', () => {
  let component: AacExampleComponent;
  let fixture: ComponentFixture<AacExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AacExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AacExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
