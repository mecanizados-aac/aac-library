import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AacLibraryComponent } from './aac-library.component';

describe('AacLibraryComponent', () => {
  let component: AacLibraryComponent;
  let fixture: ComponentFixture<AacLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AacLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AacLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
