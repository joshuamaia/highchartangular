import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhabasicoComponent } from './linhabasico.component';

describe('LinhabasicoComponent', () => {
  let component: LinhabasicoComponent;
  let fixture: ComponentFixture<LinhabasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhabasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhabasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
