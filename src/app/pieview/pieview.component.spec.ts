import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieviewComponent } from './pieview.component';

describe('PieviewComponent', () => {
  let component: PieviewComponent;
  let fixture: ComponentFixture<PieviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
