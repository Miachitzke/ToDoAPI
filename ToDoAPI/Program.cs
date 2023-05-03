using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using ToDoAPI.Data;
using ToDoAPI.Repository.Implementations;
using ToDoAPI.Repository.Interfaces;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using ToDoAPI;

var builder = WebApplication.CreateBuilder(args);

var key = Encoding.ASCII.GetBytes(Settings.Segredo);

// Add services to the container.

builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddAuthentication(o =>
{    o.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    o.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(o =>
{
    o.RequireHttpsMetadata = false;
    o.SaveToken = true;
    o.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateAudience = false
    };
});

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
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "ToDoAPI V1");
    });
}

app.UseHttpsRedirection();


app.UseAuthorization();
app.UseAuthentication();

app.UseCors(options => options
    .WithOrigins("http://localhost:4200")
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials());


app.MapControllers();

app.Run();
