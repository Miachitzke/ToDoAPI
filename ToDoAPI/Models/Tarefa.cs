using System;
using System.Collections.Generic;

namespace ToDoAPP.Models
{
    public class Tarefa
    {
        public int ID { get; set; }
        public int ListaTarefaID { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime? DataLimite { get; set; }
        public DateTime? DataAlteracao { get; set; }
        public int Prioridade { get; set; }
        public string Status { get; set; }
        public byte[] Anexo { get; set; }
        public int CriadorID { get; set; }
        public int? UltAlteradorID { get; set; }
        public ICollection<Tarefa> Subtarefas { get; set; }


        public virtual ICollection<HistTarefa> Historico { get; set; }
        public virtual ICollection<UsuarioTarefa> UsuariosTarefa { get; set; }

    }
}
