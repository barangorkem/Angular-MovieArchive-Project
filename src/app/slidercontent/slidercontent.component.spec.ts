import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidercontentComponent } from './slidercontent.component';

describe('SlidercontentComponent', () => {
  let component: SlidercontentComponent;
  let fixture: ComponentFixture<SlidercontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidercontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
