import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RjeeComponent } from './rjee.component';

describe('RjeeComponent', () => {
  let component: RjeeComponent;
  let fixture: ComponentFixture<RjeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RjeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RjeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
