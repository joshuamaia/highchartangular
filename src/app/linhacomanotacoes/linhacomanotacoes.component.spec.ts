import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhacomanotacoesComponent } from './linhacomanotacoes.component';

describe('LinhacomanotacoesComponent', () => {
  let component: LinhacomanotacoesComponent;
  let fixture: ComponentFixture<LinhacomanotacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhacomanotacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhacomanotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
