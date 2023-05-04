using System;
using System.Collections.Generic;
using TodoListMobile.Enums;

namespace TodoListMobile.Models
{
    public class Tarefa
    {
        public int ID { get; set; }
        public int ListaTarefaID { get; set; }
        public string Titulo { get; set; }
        public string? Descricao { get; set; }
        public DateTimeOffset DataCriacao { get; set; }
        public DateTimeOffset? DataLimite { get; set; }
        public DateTimeOffset? DataAlteracao { get; set; }
        public int? Prioridade { get; set; }
        public StatusTarefa? Status { get; set; }
        public byte[]? Anexo { get; set; }
        public int CriadorID { get; set; }
        public int? UltAlteradorID { get; set; }
        public ICollection<Tarefa>? Subtarefas { get; set; }


        public virtual ICollection<HistTarefa>? Historico { get; set; }
        public virtual ICollection<UsuarioTarefa>? UsuariosTarefa { get; set; }

    }
}
