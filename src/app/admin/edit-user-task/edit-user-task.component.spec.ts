import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserTaskComponent } from './edit-user-task.component';

describe('EditUserTaskComponent', () => {
  let component: EditUserTaskComponent;
  let fixture: ComponentFixture<EditUserTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
