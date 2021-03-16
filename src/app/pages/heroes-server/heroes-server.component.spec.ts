import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesServerComponent } from './heroes-server.component';

describe('HeroesServerComponent', () => {
  let component: HeroesServerComponent;
  let fixture: ComponentFixture<HeroesServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
