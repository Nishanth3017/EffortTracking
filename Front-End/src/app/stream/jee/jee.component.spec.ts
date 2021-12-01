import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeeComponent } from './jee.component';

describe('JeeComponent', () => {
  let component: JeeComponent;
  let fixture: ComponentFixture<JeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
