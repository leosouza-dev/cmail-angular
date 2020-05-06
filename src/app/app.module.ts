import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ModuloRoteamento } from './app.route';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    // importando o componente
    HeaderComponent ,
    CaixaDeEntradaComponent,
    LoginComponent,
    CadastroComponent,
    CmailFormGroupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
