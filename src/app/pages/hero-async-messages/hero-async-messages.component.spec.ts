import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAsyncMessagesComponent } from './hero-async-messages.component';

describe('HeroAsyncMessagesComponent', () => {
  let component: HeroAsyncMessagesComponent;
  let fixture: ComponentFixture<HeroAsyncMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAsyncMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAsyncMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
