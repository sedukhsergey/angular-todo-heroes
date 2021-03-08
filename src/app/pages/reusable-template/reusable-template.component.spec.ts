import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTemplateComponent } from './reusable-template.component';

describe('ReusableTemplateComponent', () => {
  let component: ReusableTemplateComponent;
  let fixture: ComponentFixture<ReusableTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
