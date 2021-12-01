import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiComponent } from './mui.component';

describe('MuiComponent', () => {
  let component: MuiComponent;
  let fixture: ComponentFixture<MuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
