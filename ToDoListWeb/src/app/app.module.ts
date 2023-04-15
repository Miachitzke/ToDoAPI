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
import { FormtarefasComponent } from './pages/tarefas/formtarefas/formtarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Erro404Component,
    ListaTarefasComponent,
    TarefasComponent,
    FormtarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
