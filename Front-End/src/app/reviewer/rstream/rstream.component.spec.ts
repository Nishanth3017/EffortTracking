import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RstreamComponent } from './rstream.component';

describe('RstreamComponent', () => {
  let component: RstreamComponent;
  let fixture: ComponentFixture<RstreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RstreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
