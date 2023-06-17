import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizeComponent } from './view-quize.component';

describe('ViewQuizeComponent', () => {
  let component: ViewQuizeComponent;
  let fixture: ComponentFixture<ViewQuizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
