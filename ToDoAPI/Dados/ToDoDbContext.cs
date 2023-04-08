using Microsoft.EntityFrameworkCore;
using ToDoAPI.Data.Map;
using ToDoAPI.Models;

namespace ToDoAPI.Data
{
    public class ToDoDbContext : DbContext
    {
        public ToDoDbContext(DbContextOptions<ToDoDbContext> options) : base(options) { }

        public DbSet<Tarefa> Tarefa { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<ListaTarefas> ListaTarefas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Aplica as configurações dos mapeamentos feitos pra ORM.
            modelBuilder.ApplyConfiguration(new TarefaMap());

            base.OnModelCreating(modelBuilder);
        }
    }
}
