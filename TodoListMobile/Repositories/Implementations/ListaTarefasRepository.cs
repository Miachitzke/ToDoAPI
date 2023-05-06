using TodoListMobile.Models;
using TodoListMobile.Repositories.Interfaces;
using TodoListMobile.Utils;

namespace TodoListMobile.Repositories.Implementations
{
    public class ListaTarefasRepository : IListaTarefasRepository
    {
        public readonly HttpClient _client;
        public const string BasePath = "api/ListaTarefas";

        public ListaTarefasRepository(HttpClient client) 
        {
            _client = client;
        }

        public async Task<List<ListaTarefa>> BuscarTodasListaTarefas()
        {
            var response = await _client.GetAsync(BasePath);

            return await response.ReadContentAs<List<ListaTarefa>>();
        }

        public async Task<ListaTarefa> Adicionar(ListaTarefa listaTarefas)
        {
            var response = await _client.PostAsJson(BasePath, listaTarefas);

            if (response.IsSuccessStatusCode)
                return await response.ReadContentAs<ListaTarefa>();
            else throw new Exception("Something went wrong when calling the api");
        }

        public async Task<ListaTarefa> Atualizar(ListaTarefa listaTarefas, int id)
        {
            var response = await _client.PutAsJson(BasePath, listaTarefas.ID);

            if (response.IsSuccessStatusCode)
                return await response.ReadContentAs<ListaTarefa>();
            else throw new Exception("Something went wrong when calling the api");
        }

        public async Task<ListaTarefa> BuscarPorId(int id)
        {
            var response = await _client.GetAsync($"{BasePath}/{id}");

            return await response.ReadContentAs<ListaTarefa>();
        }

         

        public async Task<bool> Deletar(int id)
        {
            var response = await _client.GetAsync($"{BasePath}/{id}");

            if (response.IsSuccessStatusCode)
                return await response.ReadContentAs<bool>();
            else throw new Exception("Something went wrong when calling the api");

        }
    }
}
