import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesServerPageComponent } from './heroes-server-page.component';

describe('HeroesServerPageComponent', () => {
  let component: HeroesServerPageComponent;
  let fixture: ComponentFixture<HeroesServerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesServerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesServerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
