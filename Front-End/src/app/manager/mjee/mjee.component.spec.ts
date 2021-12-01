import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjeeComponent } from './mjee.component';

describe('MjeeComponent', () => {
  let component: MjeeComponent;
  let fixture: ComponentFixture<MjeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
