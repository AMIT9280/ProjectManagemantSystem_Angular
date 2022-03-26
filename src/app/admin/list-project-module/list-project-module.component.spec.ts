import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectModuleComponent } from './list-project-module.component';

describe('ListProjectModuleComponent', () => {
  let component: ListProjectModuleComponent;
  let fixture: ComponentFixture<ListProjectModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjectModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
