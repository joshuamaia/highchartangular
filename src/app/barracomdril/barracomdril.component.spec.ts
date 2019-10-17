import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarracomdrilComponent } from './barracomdril.component';

describe('BarracomdrilComponent', () => {
  let component: BarracomdrilComponent;
  let fixture: ComponentFixture<BarracomdrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarracomdrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarracomdrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
