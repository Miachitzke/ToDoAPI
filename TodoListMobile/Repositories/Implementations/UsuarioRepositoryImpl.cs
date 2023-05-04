
using TodoListMobile.Models;
using TodoListMobile.Repositories.Interfaces;

namespace TodoListMobile.Repositories.Implementations
{
    public class UsuarioRepositoryImpl : IUsuarioRepository
    {
        public Task<Usuario> Adicionar(Usuario usuario)
        {
            throw new NotImplementedException();
        }

        public Task<Usuario> Atualizar(Usuario usuario, int id)
        {
            throw new NotImplementedException();
        }

        public Task<Usuario> BuscarPorId(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Usuario>> BuscarTodosUsuarios()
        {
            throw new NotImplementedException();
        }

        public Task<bool> Deletar(int id)
        {
            throw new NotImplementedException();
        }
    }
}
