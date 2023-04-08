using System.Collections.Generic;

namespace ToDoAPI.Models
{
    public class Usuario
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public virtual ICollection<ListaTarefas>? ListaTarefas { get; set; }
        public virtual ICollection<UsuarioTarefa>? UsuariosTarefa { get; set; }
    }
}
