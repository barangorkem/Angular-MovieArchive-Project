import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescontentComponent } from './moviescontent.component';

describe('MoviescontentComponent', () => {
  let component: MoviescontentComponent;
  let fixture: ComponentFixture<MoviescontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviescontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviescontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
