import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeValueComponent } from './resize-value.component';

describe('ResizeValueComponent', () => {
  let component: ResizeValueComponent;
  let fixture: ComponentFixture<ResizeValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
