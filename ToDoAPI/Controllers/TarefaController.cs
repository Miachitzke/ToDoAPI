using System.Collections.Generic;
using System.Web.Http;
using ToDoAPI.Data;
using ToDoAPI.Models;

namespace ToDoAPI.Controllers
{
    [RoutePrefix("api/tarefas/")]
    public class TarefaController : ApiController
    {        

        [HttpGet, Route("BuscarLista/{UsuarioID}")]
        public IEnumerable<ListaTarefas> BuscarLista(int UsuarioID)
        {
            return TarefaCRUD.BuscarLista(UsuarioID);
        }
        
        [HttpGet, Route("ListarTarefas/{ListaID}")]
        public List<Tarefa> ListarTarefas(int ListaID)
        {
            return TarefaCRUD.ListarTarefas(ListaID);
        }

    }
}
