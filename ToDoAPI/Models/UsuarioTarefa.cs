namespace ToDoAPP.Models
{
    public class UsuarioTarefa
    {
        public int ID { get; set; }
        public int TarefaID { get; set; }
        public int UsuarioID { get; set; }
        public string? NivelPermissao { get; set; }

        public virtual Tarefa? Tarefas { get; set; }
        public virtual Usuario? Usuarios { get; set; }
    }
}
