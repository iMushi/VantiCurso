import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirParamsComponent } from './recibir-params.component';

describe('RecibirParamsComponent', () => {
  let component: RecibirParamsComponent;
  let fixture: ComponentFixture<RecibirParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibirParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibirParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
