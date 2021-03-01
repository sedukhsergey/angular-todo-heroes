import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisItemDetailsComponent } from './crisis-item-details.component';

describe('CrisisItemDetailsComponent', () => {
  let component: CrisisItemDetailsComponent;
  let fixture: ComponentFixture<CrisisItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
