import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisweeksmovieAdminComponent } from './thisweeksmovie-admin.component';

describe('ThisweeksmovieAdminComponent', () => {
  let component: ThisweeksmovieAdminComponent;
  let fixture: ComponentFixture<ThisweeksmovieAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisweeksmovieAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisweeksmovieAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
