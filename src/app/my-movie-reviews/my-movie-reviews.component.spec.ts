import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMovieReviewsComponent } from './my-movie-reviews.component';

describe('MyMovieReviewsComponent', () => {
  let component: MyMovieReviewsComponent;
  let fixture: ComponentFixture<MyMovieReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMovieReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMovieReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
