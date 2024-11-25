import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompoipeComponent } from './custompoipe.component';

describe('CustompoipeComponent', () => {
  let component: CustompoipeComponent;
  let fixture: ComponentFixture<CustompoipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustompoipeComponent]
    });
    fixture = TestBed.createComponent(CustompoipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
