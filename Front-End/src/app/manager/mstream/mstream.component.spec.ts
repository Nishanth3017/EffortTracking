import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstreamComponent } from './mstream.component';

describe('MstreamComponent', () => {
  let component: MstreamComponent;
  let fixture: ComponentFixture<MstreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
