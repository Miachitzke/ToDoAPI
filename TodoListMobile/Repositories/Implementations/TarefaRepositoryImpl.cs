
using TodoListMobile.Models;
using TodoListMobile.Repositories.Interfaces;

namespace TodoListMobile.Repositories.Implementations
{
    public class TarefaRepositoryImpl : ITarefaRepository
    {
        public Task<Tarefa> Adicionar(Tarefa tarefa)
        {
            throw new NotImplementedException();
        }

        public Task<Tarefa> Atualizar(Tarefa tarefa, int id)
        {
            throw new NotImplementedException();
        }

        public Task<Tarefa> BuscarPorId(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Tarefa>> BuscarTodasTarefas()
        {
            throw new NotImplementedException();
        }

        public Task<bool> Deletar(int id)
        {
            throw new NotImplementedException();
        }
    }
}
