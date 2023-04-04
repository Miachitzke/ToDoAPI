using System.Collections.Generic;

namespace ToDoAPP.Models
{
    public class ListaTarefas
    {
        public int ID { get; set; }
        public string NomeLista { get; set; }
        public virtual ICollection<Tarefa> Tarefas { get; set; }

    }
}
