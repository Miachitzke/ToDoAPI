using ToDoAPI.Models;

namespace ToDoAPI.Data.DTO
{
    public class ListaTarefaDTO
    {
        public int ID { get; set; }
        public string? NomeLista { get; set; }
        public int UsuarioID { get; set; }
        public virtual ICollection<Tarefa>? Tarefas { get; set; }
    }
}
