using TodoListMobile.Models;

namespace TodoListMobile.Repositories.Interfaces
{
    public interface IListaTarefasRepository
    {
        Task<List<ListaTarefa>> BuscarTodasListaTarefas();
        Task<ListaTarefa> BuscarPorId(int id);
        Task<ListaTarefa> Adicionar(ListaTarefa listaTarefas);
        Task<ListaTarefa> Atualizar(ListaTarefa listaTarefas, int id);
        Task<bool> Deletar(int id);
    }
}
