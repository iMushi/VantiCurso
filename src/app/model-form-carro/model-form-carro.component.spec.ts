import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFormCarroComponent } from './model-form-carro.component';

describe('ModelFormCarroComponent', () => {
  let component: ModelFormCarroComponent;
  let fixture: ComponentFixture<ModelFormCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFormCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFormCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
