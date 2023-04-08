using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoAPI.Models;
using ToDoAPI.Repository.Interfaces;

namespace ToDoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarefaController : ControllerBase
    {
        private readonly ITarefaRepository _tarefaRepository;
        public TarefaController(ITarefaRepository tarefaRepository)
        {
            _tarefaRepository = tarefaRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<ListaTarefas>>>  BuscarTodasTarefas()
        {
            List<Tarefa> tarefas = await _tarefaRepository.BuscarTodasTarefas();
            return Ok(tarefas);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Tarefa>> BuscarPorId(int id)
        {
            Tarefa tarefa = await _tarefaRepository.BuscarPorId(id);
            return Ok(tarefa);
        }

        [HttpPost("Cadastar")]
        public async Task<ActionResult<Tarefa>> Cadastrar([FromBody] Tarefa tarefaACadastrar)
        {
            Tarefa tarefa = await _tarefaRepository.Adicionar(tarefaACadastrar);
            return Ok(tarefa);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Tarefa>> Atualizar([FromBody] Tarefa tarefaAtualizada, int id)
        {
            tarefaAtualizada.ID = id;
            Tarefa tarefa = await _tarefaRepository.Atualizar(tarefaAtualizada, id);
            return Ok(tarefa);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Tarefa>> Deletar(int id)
        {
            bool deletado = await _tarefaRepository.Deletar(id);
            return Ok(deletado);
        }
    }
}
