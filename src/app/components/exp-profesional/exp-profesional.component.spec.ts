import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpProfesionalComponent } from './exp-profesional.component';

describe('ExpProfesionalComponent', () => {
  let component: ExpProfesionalComponent;
  let fixture: ComponentFixture<ExpProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpProfesionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
