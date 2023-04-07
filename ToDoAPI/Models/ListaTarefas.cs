using System.Collections.Generic;

namespace ToDoAPI.Models
{
    public class ListaTarefas
    {
        public int ID { get; set; }
        public string NomeLista { get; set; }
        public int UsuarioID { get; set; }
        public virtual ICollection<Tarefa> Tarefas { get; set; }

    }
}
