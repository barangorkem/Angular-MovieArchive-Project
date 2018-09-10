import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriescontentComponent } from './categoriescontent.component';

describe('CategoriescontentComponent', () => {
  let component: CategoriescontentComponent;
  let fixture: ComponentFixture<CategoriescontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriescontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriescontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
