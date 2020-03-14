import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { TopoComponent } from "./topo/topo.component";
import { BarracomdrilComponent } from "./barracomdril/barracomdril.component";
import { HighchartsChartComponent } from "highcharts-angular";
import { BarrabasicoComponent } from "./barrabasico/barrabasico.component";
import { AreabasicoComponent } from "./areabasico/areabasico.component";
import { AreaporcentagemComponent } from "./areaporcentagem/areaporcentagem.component";
import { LinhabasicoComponent } from "./linhabasico/linhabasico.component";
import { LinhacomanotacoesComponent } from "./linhacomanotacoes/linhacomanotacoes.component";
import { PizzabasicoComponent } from "./pizzabasico/pizzabasico.component";
import { PizzacomdrillComponent } from "./pizzacomdrill/pizzacomdrill.component";

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    TopoComponent,
    BarracomdrilComponent,
    BarrabasicoComponent,
    AreabasicoComponent,
    AreaporcentagemComponent,
    LinhabasicoComponent,
    LinhacomanotacoesComponent,
    PizzabasicoComponent,
    PizzacomdrillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
