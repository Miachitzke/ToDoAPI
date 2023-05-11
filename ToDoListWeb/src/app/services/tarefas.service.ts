import { Injectable } from '@angular/core';
import { ITarefas } from '../interfaces/ITarefas';
import { HttpClient } from '@angular/common/http';
import { AppModule } from '../app.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  tarefa: ITarefas[] = [];

  constructor(private http: HttpClient, private API: AppModule) { }
  private baseUrl = this.API.getBaseUrl();

  listarTarefas(idLista: number): Observable<ITarefas[]> {
    const url = `${this.baseUrl}/Tarefa/BuscarPorIdLista/${idLista}`;
    return this.http.get<ITarefas[]>(url);
  }

  criarNovaTarefa(tarefa: ITarefas): Observable<any> {
    const url = `${this.baseUrl}/Tarefa/Cadastrar`;
    return this.http.post(url, tarefa)
  }

  atualizarTarefa(tarefa: ITarefas):Observable<any> {
    const url = this.API.getBaseUrl() + '/Tarefa/' + tarefa.id;
    return this.http.put(url, tarefa);
  }

  deletarTarefa(idTarefa: number): Observable<any> {
    const url = `${this.baseUrl}/Tarefa/${idTarefa}`;
    return this.http.delete(url);
  }

  concluirTarefa(id: number) {
    const url = this.API.getBaseUrl() + '/Tarefa/Concluir/' + id;
    return this.http.post(url,id);
  } 

}
