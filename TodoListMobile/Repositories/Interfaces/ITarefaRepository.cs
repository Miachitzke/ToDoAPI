﻿using TodoListMobile.Models;

namespace TodoListMobile.Repositories.Interfaces
{
    public interface ITarefaRepository
    {
        Task<List<Tarefa>> BuscarTodasTarefas();
        Task<Tarefa> BuscarPorId(int id);
        Task<Tarefa> Adicionar(Tarefa tarefa);
        Task<Tarefa> Atualizar(Tarefa tarefa, int id);
        Task<bool> Deletar(int id);
    }
}
