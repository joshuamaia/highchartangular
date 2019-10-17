import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaporcentagemComponent } from './areaporcentagem.component';

describe('AreaporcentagemComponent', () => {
  let component: AreaporcentagemComponent;
  let fixture: ComponentFixture<AreaporcentagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaporcentagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaporcentagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
