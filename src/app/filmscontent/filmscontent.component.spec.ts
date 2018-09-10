import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmscontentComponent } from './filmscontent.component';

describe('FilmscontentComponent', () => {
  let component: FilmscontentComponent;
  let fixture: ComponentFixture<FilmscontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmscontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
