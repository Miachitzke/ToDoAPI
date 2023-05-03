using ToDoAPI.Models;

namespace ToDoAPI.Repository.Interfaces
{
    public interface ITarefaRepository
    {
        Task<List<Tarefa>> BuscarTodasTarefas();
        Task<Tarefa> BuscarPorId(int id);
        Task<List<Tarefa>> BuscarPorIdLista(int idLista);
        Task<Tarefa> Adicionar(Tarefa tarefa);
        Task<Tarefa> Atualizar(Tarefa tarefa, int id);
        Task<Tarefa> Concluir(int id);
        Task<bool> Deletar(int id);
    }
}
