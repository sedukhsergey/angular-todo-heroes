import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDebounceComponent } from './hero-debounce.component';

describe('HeroDebounceComponent', () => {
  let component: HeroDebounceComponent;
  let fixture: ComponentFixture<HeroDebounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDebounceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
