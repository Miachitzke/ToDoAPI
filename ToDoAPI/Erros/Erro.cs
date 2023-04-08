using System.Text.Json;

namespace ToDoAPI.Erros
{
    // Classe criada para tratamento de erros do sistema ToDoList API
    public class Erro
    {
        public string? StatusErro { get; set; }
        public string? Mensagem { get; set; }

        public override string ToString()
        {
            return JsonSerializer.Serialize(this);
        }
    }
}
