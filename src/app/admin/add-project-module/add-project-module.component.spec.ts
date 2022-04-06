import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectModuleComponent } from './add-project-module.component';

describe('AddProjectModuleComponent', () => {
  let component: AddProjectModuleComponent;
  let fixture: ComponentFixture<AddProjectModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
