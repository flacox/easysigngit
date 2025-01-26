import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quiz3Page } from './quiz3.page';

describe('Quiz3Page', () => {
  let component: Quiz3Page;
  let fixture: ComponentFixture<Quiz3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
