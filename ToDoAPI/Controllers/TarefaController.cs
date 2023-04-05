using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ToDoAPI.Models.Banco;
using ToDoAPP.Models;

namespace ToDoAPI.Controllers
{
    public class TarefaController : ApiController
    {
        ToDoAppEntities db = new ToDoAppEntities();

        [HttpGet]
        [Route("api/ListarTarefas/{UsuarioID}")]
        public IEnumerable<ListaTarefas> ListarTarefas(int UsuarioID)
        {
            using(db)
            {
                var lista = db.ListaTarefa
                    .Where(lt => lt.UsuarioID == UsuarioID)
                    .Select(l => new ListaTarefas
                    {
                        ID = l.ID,
                        NomeLista = l.Nome,
                        Tarefas = (ICollection<ToDoAPP.Models.Tarefa>)l.Tarefas
                    })
                    .ToList();
                return lista;
            }
        }
        //TODO finalizar requisições 
    }
}
