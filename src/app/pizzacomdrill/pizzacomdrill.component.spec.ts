import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzacomdrillComponent } from './pizzacomdrill.component';

describe('PizzacomdrillComponent', () => {
  let component: PizzacomdrillComponent;
  let fixture: ComponentFixture<PizzacomdrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzacomdrillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzacomdrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
