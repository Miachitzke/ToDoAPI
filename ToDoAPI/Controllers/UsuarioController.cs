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
        public async Task<ActionResult<dynamic>> Login([FromBody] UsuarioLogin usuario)
        {
            try
            {
                var senhaCriptografada = CriptoSvc.Criptografar(usuario.senha);
                var usuarioFiltrado = await _usuarioRepository.BuscaUsuario(usuario.email, senhaCriptografada);

                if (usuarioFiltrado == null)
                {
                    return Unauthorized();
                }

                var token = TokenSvc.GenerateToken(usuarioFiltrado);

                return Ok(token);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro: {ex.Message}");
            }
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
            usuarioACadastrar.Senha = CriptoSvc.Criptografar(usuarioACadastrar.Senha);
            Usuario usuario = await _usuarioRepository.Adicionar(usuarioACadastrar);
            return Ok(usuario);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Usuario>> Atualizar([FromBody] Usuario usuarioAtualizado, int id)
        {
            usuarioAtualizado.ID = id;
            usuarioAtualizado.Senha = CriptoSvc.Criptografar(usuarioAtualizado.Senha);
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
