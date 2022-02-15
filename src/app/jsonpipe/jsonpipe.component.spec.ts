import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpipeComponent } from './jsonpipe.component';

describe('JsonpipeComponent', () => {
  let component: JsonpipeComponent;
  let fixture: ComponentFixture<JsonpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
