using ToDoAPI.Data.DTO;
using ToDoAPI.Models;

namespace ToDoAPI.Repository.Interfaces
{
    public interface IListaTarefasRepository
    {
        Task<IEnumerable<ListaTarefaDTO>> BuscarTodasListaTarefas();
        Task<ListaTarefa> BuscarPorId(int id);
        Task<List<ListaTarefa>> BuscarPorIdUsuario(int idUsuario);
        Task<ListaTarefa> Adicionar(ListaTarefa listaTarefas);
        Task<ListaTarefa> Atualizar(ListaTarefa listaTarefas, int id);
        Task<bool> Deletar(int id);
    }
}
