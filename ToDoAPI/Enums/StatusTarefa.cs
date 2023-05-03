using System.ComponentModel;

namespace ToDoAPI.Enums
{
    public enum StatusTarefa
    {
        [Description("A fazer")]
        AFazer = 0,
        [Description("Em andamento")]
        EmAndamento = 1,
        [Description("Concluído")]
        Concluido = 2
    }
}
