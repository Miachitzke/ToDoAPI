using System;
using System.Collections.Generic;

namespace TodoListMobile.Models
{
    public class HistTarefa
    {
        public int ID { get; set; }
        public int TarefaID { get; set; }
        public int UsuarioID { get; set; }
        public DateTime DataAcao { get; set; }
        public string Acao { get; set; }
    }
}
