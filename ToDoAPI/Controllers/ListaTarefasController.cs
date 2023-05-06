using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoAPI.Data.DTO;
using ToDoAPI.Models;
using ToDoAPI.Repository.Interfaces;

namespace ToDoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListaTarefasController : ControllerBase
    {
        private readonly IListaTarefasRepository _listaTarefasRepository;
        public ListaTarefasController(IListaTarefasRepository listaTarefasRepository)
        {
            _listaTarefasRepository = listaTarefasRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ListaTarefaDTO>>> BuscarTodasListaTarefas()
        {
            var listaTarefas = await _listaTarefasRepository.BuscarTodasListaTarefas();

            if (listaTarefas == null) return NotFound();

            return Ok(listaTarefas);
 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ListaTarefa>> BuscarPorId(int id)
        {
            ListaTarefa listaTarefas = await _listaTarefasRepository.BuscarPorId(id);
            return Ok(listaTarefas);
        }

        [HttpGet("BuscarPorIdUsuario/{idUsuario}")]
        public async Task<ActionResult<List<ListaTarefa>>> BuscarPorIdUsuario(int idUsuario)
        {
            List<ListaTarefa> listaTarefas = await _listaTarefasRepository.BuscarPorIdUsuario(idUsuario);
            return Ok(listaTarefas);
        }

        [HttpPost("Cadastrar")]
        public async Task<ActionResult<ListaTarefa>> Cadastrar([FromBody] ListaTarefa listaTarefasACadastrar)
        {
            ListaTarefa listaTarefas = await _listaTarefasRepository.Adicionar(listaTarefasACadastrar);
            return Ok(listaTarefas);

        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ListaTarefa>> Atualizar([FromBody] ListaTarefa listaTarefas, int id)
        {
            listaTarefas.ID = id;
            ListaTarefa lista = await _listaTarefasRepository.Atualizar(listaTarefas, id);
            return Ok(lista);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ListaTarefa>> Deletar(int id)
        {
            bool deletado = await _listaTarefasRepository.Deletar(id);
            return Ok(deletado);
        }
    }
}
