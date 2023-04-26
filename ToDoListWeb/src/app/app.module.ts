import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Erro404Component } from './pages/shared/erro404/erro404.component';
import { ListaTarefasComponent } from './pages/tarefas/listatarefas/listatarefas.component';
import { TarefasComponent } from './pages/tarefas/tarefas/tarefas.component';
import { RouterModule } from '@angular/router';
import { ModaltarefasComponent } from './pages/tarefas/acaotarefas/modaltarefas.component';
import { MarkdownModule } from 'ngx-markdown';
import { AcaoUsuarioComponent } from './pages/usuarios/acaousuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Erro404Component,
    ListaTarefasComponent,
    TarefasComponent,
    ModaltarefasComponent,
    AcaoUsuarioComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MarkdownModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public baseURL = 'https://localhost:7188/';
}
