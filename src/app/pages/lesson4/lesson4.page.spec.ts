import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lesson4Page } from './lesson4.page';

describe('Lesson4Page', () => {
  let component: Lesson4Page;
  let fixture: ComponentFixture<Lesson4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
