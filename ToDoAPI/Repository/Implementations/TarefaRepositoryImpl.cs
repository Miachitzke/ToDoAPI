using ToDoAPI.Models;
using ToDoAPI.Data;
using Microsoft.EntityFrameworkCore;
using ToDoAPI.Repository.Interfaces;
using Microsoft.AspNetCore.Mvc.Filters;

namespace ToDoAPI.Repository.Implementations
{
    public class TarefaRepositoryImpl : ITarefaRepository
    {
        private readonly ToDoDbContext _dbContext;
        public TarefaRepositoryImpl(ToDoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Tarefa> BuscarPorId(int id)
        {
            return await _dbContext.Tarefa.FirstOrDefaultAsync(x => x.ID == id);
        }

        public async Task<List<Tarefa>> BuscarTodasTarefas()
        {
            return await _dbContext.Tarefa.ToListAsync();
        }

        public async Task<Tarefa> Adicionar(Tarefa tarefa)
        {
            await _dbContext.Tarefa.AddAsync(tarefa);
            await _dbContext.SaveChangesAsync();

            return tarefa;
        }
        public async Task<Tarefa> Atualizar(Tarefa tarefa, int id)
        {
            Tarefa tarefaPorId = await BuscarPorId(id);

            if (tarefaPorId == null)
            {
                throw new Exception($"Tarefa para o ID {id}: não foi encontrado no banco de dados.");
            }

            tarefaPorId.Titulo = tarefa.Titulo;
            tarefaPorId.Descricao = tarefa.Descricao;
            tarefaPorId.Status = tarefa.Status;

            _dbContext.Tarefa.Update(tarefaPorId);
            await _dbContext.SaveChangesAsync();

            return tarefaPorId;
        }

        public async Task<Tarefa> Concluir(int id)
        {
            Tarefa tarefaPorId = await BuscarPorId(id);

            if (tarefaPorId == null)
            {
                throw new Exception($"Tarefa para o ID {id}: não foi encontrado no banco de dados.");
            }
            
            tarefaPorId.Status = Enums.StatusTarefa.Concluido;

            _dbContext.Tarefa.Update(tarefaPorId);
            await _dbContext.SaveChangesAsync();

            return tarefaPorId;
        }

        public async Task<bool> Deletar(int id)
        {
            Tarefa tarefaPorId = await BuscarPorId(id);

            if (tarefaPorId == null)
            {
                throw new Exception($"Tarefa para o ID {id}: não foi encontrado no banco de dados.");
            }

            _dbContext.Remove(tarefaPorId);
            await _dbContext.SaveChangesAsync();
            return true;
        }
    }
}
