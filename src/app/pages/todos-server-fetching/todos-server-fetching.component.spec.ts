import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosServerFetchingComponent } from './todos-server-fetching.component';

describe('TodosServerFetchingComponent', () => {
  let component: TodosServerFetchingComponent;
  let fixture: ComponentFixture<TodosServerFetchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosServerFetchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosServerFetchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
