import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviereviewcontentComponent } from './moviereviewcontent.component';

describe('MoviereviewcontentComponent', () => {
  let component: MoviereviewcontentComponent;
  let fixture: ComponentFixture<MoviereviewcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviereviewcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviereviewcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
