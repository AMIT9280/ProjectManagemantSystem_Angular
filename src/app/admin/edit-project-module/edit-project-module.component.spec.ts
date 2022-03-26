import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectModuleComponent } from './edit-project-module.component';

describe('EditProjectModuleComponent', () => {
  let component: EditProjectModuleComponent;
  let fixture: ComponentFixture<EditProjectModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
