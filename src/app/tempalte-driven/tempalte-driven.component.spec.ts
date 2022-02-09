import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempalteDrivenComponent } from './tempalte-driven.component';

describe('TempalteDrivenComponent', () => {
  let component: TempalteDrivenComponent;
  let fixture: ComponentFixture<TempalteDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempalteDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempalteDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
