import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LassocreateComponent } from './lassocreate.component';

describe('LassocreateComponent', () => {
  let component: LassocreateComponent;
  let fixture: ComponentFixture<LassocreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LassocreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LassocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
