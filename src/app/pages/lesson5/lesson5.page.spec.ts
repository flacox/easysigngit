import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lesson5Page } from './lesson5.page';

describe('Lesson5Page', () => {
  let component: Lesson5Page;
  let fixture: ComponentFixture<Lesson5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
