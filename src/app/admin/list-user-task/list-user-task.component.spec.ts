import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserTaskComponent } from './list-user-task.component';

describe('ListUserTaskComponent', () => {
  let component: ListUserTaskComponent;
  let fixture: ComponentFixture<ListUserTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
