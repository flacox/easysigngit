import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lesson2Page } from './lesson2.page';

describe('Lesson2Page', () => {
  let component: Lesson2Page;
  let fixture: ComponentFixture<Lesson2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
