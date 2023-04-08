﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ToDoAPI.Data;

#nullable disable

namespace ToDoAPI.Migrations
{
    [DbContext(typeof(ToDoDbContext))]
    partial class ToDoDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("TarefaUsuarioTarefa", b =>
                {
                    b.Property<int>("TarefasID")
                        .HasColumnType("int");

                    b.Property<int>("UsuariosTarefaID")
                        .HasColumnType("int");

                    b.HasKey("TarefasID", "UsuariosTarefaID");

                    b.HasIndex("UsuariosTarefaID");

                    b.ToTable("TarefaUsuarioTarefa");
                });

            modelBuilder.Entity("ToDoAPI.Models.HistTarefa", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Acao")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DataAcao")
                        .HasColumnType("datetime2");

                    b.Property<int>("TarefaID")
                        .HasColumnType("int");

                    b.Property<int>("UsuarioID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("TarefaID");

                    b.ToTable("HistTarefa");
                });

            modelBuilder.Entity("ToDoAPI.Models.ListaTarefas", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("NomeLista")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UsuarioID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("UsuarioID");

                    b.ToTable("ListaTarefas");
                });

            modelBuilder.Entity("ToDoAPI.Models.Tarefa", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<byte[]>("Anexo")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<int>("CriadorID")
                        .HasColumnType("int");

                    b.Property<DateTime?>("DataAlteracao")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DataCriacao")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DataLimite")
                        .HasColumnType("datetime2");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(1000)
                        .HasColumnType("nvarchar(1000)");

                    b.Property<int>("ListaTarefaID")
                        .HasColumnType("int");

                    b.Property<int?>("ListaTarefasID")
                        .HasColumnType("int");

                    b.Property<int>("Prioridade")
                        .HasColumnType("int");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int?>("TarefaID")
                        .HasColumnType("int");

                    b.Property<string>("Titulo")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int?>("UltAlteradorID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("ListaTarefasID");

                    b.HasIndex("TarefaID");

                    b.ToTable("Tarefa");
                });

            modelBuilder.Entity("ToDoAPI.Models.Usuario", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Usuario");
                });

            modelBuilder.Entity("ToDoAPI.Models.UsuarioTarefa", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("NivelPermissao")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TarefaID")
                        .HasColumnType("int");

                    b.Property<int>("UsuarioID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("UsuarioTarefa");
                });

            modelBuilder.Entity("UsuarioUsuarioTarefa", b =>
                {
                    b.Property<int>("UsuariosID")
                        .HasColumnType("int");

                    b.Property<int>("UsuariosTarefaID")
                        .HasColumnType("int");

                    b.HasKey("UsuariosID", "UsuariosTarefaID");

                    b.HasIndex("UsuariosTarefaID");

                    b.ToTable("UsuarioUsuarioTarefa");
                });

            modelBuilder.Entity("TarefaUsuarioTarefa", b =>
                {
                    b.HasOne("ToDoAPI.Models.Tarefa", null)
                        .WithMany()
                        .HasForeignKey("TarefasID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ToDoAPI.Models.UsuarioTarefa", null)
                        .WithMany()
                        .HasForeignKey("UsuariosTarefaID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ToDoAPI.Models.HistTarefa", b =>
                {
                    b.HasOne("ToDoAPI.Models.Tarefa", null)
                        .WithMany("Historico")
                        .HasForeignKey("TarefaID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ToDoAPI.Models.ListaTarefas", b =>
                {
                    b.HasOne("ToDoAPI.Models.Usuario", null)
                        .WithMany("ListaTarefas")
                        .HasForeignKey("UsuarioID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ToDoAPI.Models.Tarefa", b =>
                {
                    b.HasOne("ToDoAPI.Models.ListaTarefas", null)
                        .WithMany("Tarefas")
                        .HasForeignKey("ListaTarefasID");

                    b.HasOne("ToDoAPI.Models.Tarefa", null)
                        .WithMany("Subtarefas")
                        .HasForeignKey("TarefaID");
                });

            modelBuilder.Entity("UsuarioUsuarioTarefa", b =>
                {
                    b.HasOne("ToDoAPI.Models.Usuario", null)
                        .WithMany()
                        .HasForeignKey("UsuariosID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ToDoAPI.Models.UsuarioTarefa", null)
                        .WithMany()
                        .HasForeignKey("UsuariosTarefaID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ToDoAPI.Models.ListaTarefas", b =>
                {
                    b.Navigation("Tarefas");
                });

            modelBuilder.Entity("ToDoAPI.Models.Tarefa", b =>
                {
                    b.Navigation("Historico");

                    b.Navigation("Subtarefas");
                });

            modelBuilder.Entity("ToDoAPI.Models.Usuario", b =>
                {
                    b.Navigation("ListaTarefas");
                });
#pragma warning restore 612, 618
        }
    }
}
