﻿using ToDoAPI.Models;

namespace ToDoAPI.Repository.Interfaces
{
    public interface IUsuarioRepository
    {
        Task<Usuario> BuscaUsuario(string email, string senha);
        Task<List<Usuario>> BuscarTodosUsuarios();
        Task<Usuario> BuscarPorId(int id);
        Task<Usuario> Adicionar(Usuario usuario);
        Task<Usuario> Atualizar(Usuario usuario, int id);
        Task<bool> Deletar(int id);
    }
}
