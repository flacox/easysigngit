import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreTestPage } from './pre-test.page';

describe('PreTestPage', () => {
  let component: PreTestPage;
  let fixture: ComponentFixture<PreTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
