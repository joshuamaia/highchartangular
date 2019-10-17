import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarracomdrilComponent } from './barracomdril/barracomdril.component';
import { BarrabasicoComponent } from './barrabasico/barrabasico.component';
import { AreabasicoComponent } from './areabasico/areabasico.component';
import { AreaporcentagemComponent } from './areaporcentagem/areaporcentagem.component';
import { LinhabasicoComponent } from './linhabasico/linhabasico.component';
import { LinhacomanotacoesComponent } from './linhacomanotacoes/linhacomanotacoes.component';
import { PizzabasicoComponent } from './pizzabasico/pizzabasico.component';
import { PizzacomdrillComponent } from './pizzacomdrill/pizzacomdrill.component';

const routes: Routes = [
  { path: 'pizzabasico', component: PizzabasicoComponent },
  { path: 'pizzadrill', component: PizzacomdrillComponent },
  { path: 'linhabasico', component: LinhabasicoComponent },
  { path: 'linhacomcanotacoes', component: LinhacomanotacoesComponent },
  { path: 'areabasico', component: AreabasicoComponent },
  { path: 'areaporcentagem', component: AreaporcentagemComponent },
  { path: 'barrabasico', component: BarrabasicoComponent },
  { path: 'barradrill', component: BarracomdrilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
