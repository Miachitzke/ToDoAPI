using Microsoft.AspNetCore.Mvc;
using ToDoAPI.Models;
using ToDoAPI.Repository.Interfaces;
using ToDoAPI.Services;

namespace ToDoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login([FromBody] UsuarioLogin usuario)
        {
            var usuarioFiltrado = await _usuarioRepository.BuscaUsuario(usuario.email, usuario.senha);

            if (usuarioFiltrado == null)
            {
                return Unauthorized();
            }

            var token = TokenSvc.GenerateToken(usuarioFiltrado);

            return Ok(token);
        }


        [HttpGet]
        public async Task<ActionResult<List<Usuario>>> BuscarTodosUsuarios()
        {
            List<Usuario> usuarios = await _usuarioRepository.BuscarTodosUsuarios();
            return Ok(usuarios);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> BuscarPorId(int id)
        {
            Usuario usuario = await _usuarioRepository.BuscarPorId(id);
            return Ok(usuario);
        }

        [HttpPost("Cadastrar")]
        public async Task<ActionResult<Usuario>> Cadastrar([FromBody] Usuario usuarioACadastrar)
        {
            Usuario usuario = await _usuarioRepository.Adicionar(usuarioACadastrar);
            return Ok(usuario);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Usuario>> Atualizar([FromBody] Usuario usuarioAtualizado, int id)
        {
            usuarioAtualizado.ID = id;
            Usuario usuario = await _usuarioRepository.Atualizar(usuarioAtualizado, id);
            return Ok(usuario);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Usuario>> Deletar(int id)
        {
            bool deletado = await _usuarioRepository.Deletar(id);
            return Ok(deletado);
        }
    }
}
