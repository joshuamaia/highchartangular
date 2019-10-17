import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrabasicoComponent } from './barrabasico.component';

describe('BarrabasicoComponent', () => {
  let component: BarrabasicoComponent;
  let fixture: ComponentFixture<BarrabasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrabasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrabasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
