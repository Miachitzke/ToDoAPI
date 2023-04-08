using Microsoft.EntityFrameworkCore;
using ToDoAPI.Data;
using ToDoAPI.Repository.Implementations;
using ToDoAPI.Repository.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Associa o EntityFramework com as credenciais do banco de dados
builder.Services.AddEntityFrameworkSqlServer()
    .AddDbContext<ToDoDbContext>(
        options => options.UseSqlServer(builder.Configuration.GetConnectionString("DataBase"))
    );

// Determina, por injeção de dependência, que toda vez que a interface for chamada, a classe de implementação indicada será instanciada.
builder.Services.AddScoped<IListaTarefasRepository, ListaTarefasRepositoryImpl>();
builder.Services.AddScoped<ITarefaRepository, TarefaRepositoryImpl>();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepositoryImpl>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
