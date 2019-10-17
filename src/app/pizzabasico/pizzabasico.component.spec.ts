import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzabasicoComponent } from './pizzabasico.component';

describe('PizzabasicoComponent', () => {
  let component: PizzabasicoComponent;
  let fixture: ComponentFixture<PizzabasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzabasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzabasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
