import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Erro404Component } from './pages/shared/erro404/erro404.component';
import { ListaTarefasComponent } from './pages/tarefas/listatarefas/listatarefas.component';
import { TarefasComponent } from './pages/tarefas/tarefas/tarefas.component';
import { HomeComponent } from './pages/home/home.component';
import { ModaltarefasComponent } from './pages/tarefas/acaotarefas/modaltarefas.component';

const routes: Routes = [
  {
  path: 'login', component: LoginComponent
  },
  {
    path: 'listastarefa' , component: HomeComponent   
  },
  {
    path: 'novalista',component: ListaTarefasComponent,
  },
  {
    path: 'editarlista/:id',component:ListaTarefasComponent,
  },
  {
    path: 'listartarefas/:idLista',component: ListaTarefasComponent,
  },
  {
    path: 'novatarefa',component: TarefasComponent,
  },
  {
    path: 'editartarefa/:id',component:TarefasComponent,
  },
  {
    path: 'modal',component:ModaltarefasComponent,
  },
  {
    path: '**', component: Erro404Component, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
