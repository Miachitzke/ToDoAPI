using System.Collections.Generic;

namespace TodoListMobile.Models
{
    public class ListaTarefa
    {
        public int ID { get; set; }
        public string NomeLista { get; set; }
        public int UsuarioID { get; set; }
        public virtual ICollection<Tarefa>? Tarefas { get; set; }
 
    }
}
