using Microsoft.EntityFrameworkCore;
using ToDoAPI.Data;
using ToDoAPI.Models;
using ToDoAPI.Repository.Interfaces;

namespace ToDoAPI.Repository.Implementations
{
    public class ListaTarefasRepositoryImpl : IListaTarefasRepository
    {
        private readonly ToDoDbContext _dbContext;

        public ListaTarefasRepositoryImpl(ToDoDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<ListaTarefas> BuscarPorId(int id)
        {
            return await _dbContext.ListaTarefas.FirstOrDefaultAsync(x => x.ID == id);
        }

        public async Task<List<ListaTarefas>> BuscarPorIdUsuario(int idUsuario)
        {
            return await _dbContext.ListaTarefas.Where(x => x.UsuarioID == idUsuario).ToListAsync();
        }

        public async Task<List<ListaTarefas>> BuscarTodasListaTarefas()
        {
            return await _dbContext.ListaTarefas.ToListAsync();
        }

        public async Task<ListaTarefas> Adicionar(ListaTarefas listaTarefas)
        {
            await _dbContext.ListaTarefas.AddAsync(listaTarefas);
            await _dbContext.SaveChangesAsync();

            return listaTarefas;
        }


        public async Task<ListaTarefas> Atualizar(ListaTarefas listaTarefas, int id)
        {
            ListaTarefas listaPorId = await BuscarPorId(id);

            if (listaPorId == null)
            {
                throw new Exception($"Lista de Tarefas para o ID {id}: não foi encontrado no banco de dados.");
            }

            listaPorId.NomeLista = listaTarefas.NomeLista;
            listaPorId.UsuarioID = listaTarefas.UsuarioID;


            _dbContext.ListaTarefas.Update(listaPorId);
            await _dbContext.SaveChangesAsync();

            return listaPorId;
        }

        public async Task<bool> Deletar(int id)
        {
            ListaTarefas listaPorId = await BuscarPorId(id);

            if (listaPorId == null)
            {
                throw new Exception($"Lista de Tarefas para o ID {id}: não foi encontrado no banco de dados.");
            }

            _dbContext.ListaTarefas.Remove(listaPorId);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
