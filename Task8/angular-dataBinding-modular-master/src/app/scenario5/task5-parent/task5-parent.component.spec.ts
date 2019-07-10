import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5ParentComponent } from './task5-parent.component';

describe('Task5ParentComponent', () => {
  let component: Task5ParentComponent;
  let fixture: ComponentFixture<Task5ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
