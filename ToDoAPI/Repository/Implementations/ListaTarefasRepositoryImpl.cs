using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ToDoAPI.Data;
using ToDoAPI.Data.DTO;
using ToDoAPI.Models;
using ToDoAPI.Repository.Interfaces;

namespace ToDoAPI.Repository.Implementations
{
    public class ListaTarefasRepositoryImpl : IListaTarefasRepository
    {
        private readonly ToDoDbContext _dbContext;

        private IMapper _mapper;

        public ListaTarefasRepositoryImpl(ToDoDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
        public async Task<ListaTarefa> BuscarPorId(int id)
        {
            return await _dbContext.ListaTarefas.FirstOrDefaultAsync(x => x.ID == id);
        }

        public async Task<List<ListaTarefa>> BuscarPorIdUsuario(int idUsuario)
        {
            return await _dbContext.ListaTarefas.Where(x => x.UsuarioID == idUsuario).ToListAsync();
        }

        public async Task<IEnumerable<ListaTarefaDTO>> BuscarTodasListaTarefas()
        {
            List<ListaTarefa> listaTarefas = await _dbContext.ListaTarefas.ToListAsync();

            return _mapper.Map<List<ListaTarefaDTO>>(listaTarefas);
 
        }

        public async Task<ListaTarefa> Adicionar(ListaTarefa listaTarefas)
        {
            await _dbContext.ListaTarefas.AddAsync(listaTarefas);
            await _dbContext.SaveChangesAsync();
            return listaTarefas;
        }


        public async Task<ListaTarefa> Atualizar(ListaTarefa listaTarefas, int id)
        {
            ListaTarefa listaPorId = await BuscarPorId(id);

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
            ListaTarefa listaPorId = await BuscarPorId(id);

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
