import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingmoviescontentComponent } from './upcomingmoviescontent.component';

describe('UpcomingmoviescontentComponent', () => {
  let component: UpcomingmoviescontentComponent;
  let fixture: ComponentFixture<UpcomingmoviescontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingmoviescontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingmoviescontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
