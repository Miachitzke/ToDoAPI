using ToDoAPI.Models;

namespace ToDoAPI.Repository.Interfaces
{
    public interface IListaTarefasRepository
    {
        Task<List<ListaTarefas>> BuscarTodasListaTarefas();
        Task<ListaTarefas> BuscarPorId(int id);
        Task<List<ListaTarefas>> BuscarPorIdUsuario(int idUsuario);
        Task<ListaTarefas> Adicionar(ListaTarefas listaTarefas);
        Task<ListaTarefas> Atualizar(ListaTarefas listaTarefas, int id);
        Task<bool> Deletar(int id);
    }
}
