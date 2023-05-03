using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        public async Task<ActionResult<List<ListaTarefas>>> BuscarTodasListaTarefas()
        {
            List<ListaTarefas> listaTarefas = await _listaTarefasRepository.BuscarTodasListaTarefas();
            return Ok(listaTarefas);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ListaTarefas>> BuscarPorId(int id)
        {
            ListaTarefas listaTarefas = await _listaTarefasRepository.BuscarPorId(id);
            return Ok(listaTarefas);
        }

        [HttpGet("BuscarPorIdUsuario/{idUsuario}")]
        public async Task<ActionResult<ListaTarefas>> BuscarPorIdUsuario(int idUsuario)
        {
            ListaTarefas listaTarefas = await _listaTarefasRepository.BuscarPorIdUsuario(idUsuario);
            return Ok(listaTarefas);
        }

        [HttpPost("Cadastrar")]
        public async Task<ActionResult<ListaTarefas>> Cadastrar([FromBody] ListaTarefas listaTarefasACadastrar)
        {
            ListaTarefas listaTarefas = await _listaTarefasRepository.Adicionar(listaTarefasACadastrar);
            return Ok(listaTarefas);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ListaTarefas>> Atualizar([FromBody] ListaTarefas listaTarefas, int id)
        {
            listaTarefas.ID = id;
            ListaTarefas lista = await _listaTarefasRepository.Atualizar(listaTarefas, id);
            return Ok(lista);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ListaTarefas>> Deletar(int id)
        {
            bool deletado = await _listaTarefasRepository.Deletar(id);
            return Ok(deletado);
        }
    }
}
