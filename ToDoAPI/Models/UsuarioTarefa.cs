using System.Collections.Generic;

namespace ToDoAPI.Models
{
    public class UsuarioTarefa
    {
        public int ID { get; set; }
        public int TarefaID { get; set; }
        public int UsuarioID { get; set; }
        public string? NivelPermissao { get; set; }

        public virtual ICollection<Tarefa> Tarefas { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
