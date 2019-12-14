import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedTitleComponent } from './changed-title.component';

describe('ChangedTitleComponent', () => {
  let component: ChangedTitleComponent;
  let fixture: ComponentFixture<ChangedTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangedTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
