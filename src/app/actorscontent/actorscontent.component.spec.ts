import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorscontentComponent } from './actorscontent.component';

describe('ActorscontentComponent', () => {
  let component: ActorscontentComponent;
  let fixture: ComponentFixture<ActorscontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorscontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
