import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfilmsAdminComponent } from './listfilms-admin.component';

describe('ListfilmsAdminComponent', () => {
  let component: ListfilmsAdminComponent;
  let fixture: ComponentFixture<ListfilmsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfilmsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfilmsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
