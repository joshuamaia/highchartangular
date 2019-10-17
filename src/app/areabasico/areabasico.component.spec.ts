import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreabasicoComponent } from './areabasico.component';

describe('AreabasicoComponent', () => {
  let component: AreabasicoComponent;
  let fixture: ComponentFixture<AreabasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreabasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreabasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
