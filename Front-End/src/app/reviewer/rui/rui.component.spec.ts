import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuiComponent } from './rui.component';

describe('RuiComponent', () => {
  let component: RuiComponent;
  let fixture: ComponentFixture<RuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
