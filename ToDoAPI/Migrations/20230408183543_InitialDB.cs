using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ToDoAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Login = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "UsuarioTarefa",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TarefaID = table.Column<int>(type: "int", nullable: false),
                    UsuarioID = table.Column<int>(type: "int", nullable: false),
                    NivelPermissao = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsuarioTarefa", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ListaTarefas",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeLista = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UsuarioID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListaTarefas", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ListaTarefas_Usuario_UsuarioID",
                        column: x => x.UsuarioID,
                        principalTable: "Usuario",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UsuarioUsuarioTarefa",
                columns: table => new
                {
                    UsuariosID = table.Column<int>(type: "int", nullable: false),
                    UsuariosTarefaID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsuarioUsuarioTarefa", x => new { x.UsuariosID, x.UsuariosTarefaID });
                    table.ForeignKey(
                        name: "FK_UsuarioUsuarioTarefa_UsuarioTarefa_UsuariosTarefaID",
                        column: x => x.UsuariosTarefaID,
                        principalTable: "UsuarioTarefa",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UsuarioUsuarioTarefa_Usuario_UsuariosID",
                        column: x => x.UsuariosID,
                        principalTable: "Usuario",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Tarefa",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ListaTarefaID = table.Column<int>(type: "int", nullable: false),
                    Titulo = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    DataCriacao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DataLimite = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DataAlteracao = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Prioridade = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    Anexo = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    CriadorID = table.Column<int>(type: "int", nullable: false),
                    UltAlteradorID = table.Column<int>(type: "int", nullable: true),
                    ListaTarefasID = table.Column<int>(type: "int", nullable: true),
                    TarefaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tarefa", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Tarefa_ListaTarefas_ListaTarefasID",
                        column: x => x.ListaTarefasID,
                        principalTable: "ListaTarefas",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_Tarefa_Tarefa_TarefaID",
                        column: x => x.TarefaID,
                        principalTable: "Tarefa",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "HistTarefa",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TarefaID = table.Column<int>(type: "int", nullable: false),
                    UsuarioID = table.Column<int>(type: "int", nullable: false),
                    DataAcao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Acao = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HistTarefa", x => x.ID);
                    table.ForeignKey(
                        name: "FK_HistTarefa_Tarefa_TarefaID",
                        column: x => x.TarefaID,
                        principalTable: "Tarefa",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TarefaUsuarioTarefa",
                columns: table => new
                {
                    TarefasID = table.Column<int>(type: "int", nullable: false),
                    UsuariosTarefaID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TarefaUsuarioTarefa", x => new { x.TarefasID, x.UsuariosTarefaID });
                    table.ForeignKey(
                        name: "FK_TarefaUsuarioTarefa_Tarefa_TarefasID",
                        column: x => x.TarefasID,
                        principalTable: "Tarefa",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TarefaUsuarioTarefa_UsuarioTarefa_UsuariosTarefaID",
                        column: x => x.UsuariosTarefaID,
                        principalTable: "UsuarioTarefa",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_HistTarefa_TarefaID",
                table: "HistTarefa",
                column: "TarefaID");

            migrationBuilder.CreateIndex(
                name: "IX_ListaTarefas_UsuarioID",
                table: "ListaTarefas",
                column: "UsuarioID");

            migrationBuilder.CreateIndex(
                name: "IX_Tarefa_ListaTarefasID",
                table: "Tarefa",
                column: "ListaTarefasID");

            migrationBuilder.CreateIndex(
                name: "IX_Tarefa_TarefaID",
                table: "Tarefa",
                column: "TarefaID");

            migrationBuilder.CreateIndex(
                name: "IX_TarefaUsuarioTarefa_UsuariosTarefaID",
                table: "TarefaUsuarioTarefa",
                column: "UsuariosTarefaID");

            migrationBuilder.CreateIndex(
                name: "IX_UsuarioUsuarioTarefa_UsuariosTarefaID",
                table: "UsuarioUsuarioTarefa",
                column: "UsuariosTarefaID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HistTarefa");

            migrationBuilder.DropTable(
                name: "TarefaUsuarioTarefa");

            migrationBuilder.DropTable(
                name: "UsuarioUsuarioTarefa");

            migrationBuilder.DropTable(
                name: "Tarefa");

            migrationBuilder.DropTable(
                name: "UsuarioTarefa");

            migrationBuilder.DropTable(
                name: "ListaTarefas");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
