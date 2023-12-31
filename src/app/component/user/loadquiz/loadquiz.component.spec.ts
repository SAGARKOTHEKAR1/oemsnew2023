import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadquizComponent } from './loadquiz.component';

describe('LoadquizComponent', () => {
  let component: LoadquizComponent;
  let fixture: ComponentFixture<LoadquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
