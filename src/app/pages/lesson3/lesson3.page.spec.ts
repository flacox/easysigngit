import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lesson3Page } from './lesson3.page';

describe('Lesson3Page', () => {
  let component: Lesson3Page;
  let fixture: ComponentFixture<Lesson3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
