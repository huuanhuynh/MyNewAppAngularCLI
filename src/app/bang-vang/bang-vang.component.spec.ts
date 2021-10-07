import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangVangComponent } from './bang-vang.component';

describe('BangVangComponent', () => {
  let component: BangVangComponent;
  let fixture: ComponentFixture<BangVangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangVangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BangVangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
