import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscontentitemComponent } from './newscontentitem.component';

describe('NewscontentitemComponent', () => {
  let component: NewscontentitemComponent;
  let fixture: ComponentFixture<NewscontentitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscontentitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscontentitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
