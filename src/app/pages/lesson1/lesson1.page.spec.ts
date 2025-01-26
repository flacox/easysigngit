import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lesson1Page } from './lesson1.page';

describe('Lesson1Page', () => {
  let component: Lesson1Page;
  let fixture: ComponentFixture<Lesson1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
