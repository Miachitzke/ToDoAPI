using TodoListMobile.Models;

namespace TodoListMobile.Repositories.Interfaces
{
    public interface IListaTarefasRepository
    {
        Task<List<ListaTarefas>> BuscarTodasListaTarefas();
        Task<ListaTarefas> BuscarPorId(int id);
        Task<ListaTarefas> Adicionar(ListaTarefas listaTarefas);
        Task<ListaTarefas> Atualizar(ListaTarefas listaTarefas, int id);
        Task<bool> Deletar(int id);
    }
}
