USE [master]
GO

/****** Object:  Database [ToDoList]    Script Date: 4/10/2023 3:40:14 PM ******/
CREATE DATABASE [ToDoList]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ToDoList', FILENAME = N'/var/opt/mssql/data/ToDoList.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ToDoList_log', FILENAME = N'/var/opt/mssql/data/ToDoList_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ToDoList].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [ToDoList] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [ToDoList] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [ToDoList] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [ToDoList] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [ToDoList] SET ARITHABORT OFF 
GO

ALTER DATABASE [ToDoList] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [ToDoList] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [ToDoList] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [ToDoList] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [ToDoList] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [ToDoList] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [ToDoList] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [ToDoList] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [ToDoList] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [ToDoList] SET  ENABLE_BROKER 
GO

ALTER DATABASE [ToDoList] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [ToDoList] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [ToDoList] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [ToDoList] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [ToDoList] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [ToDoList] SET READ_COMMITTED_SNAPSHOT ON 
GO

ALTER DATABASE [ToDoList] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [ToDoList] SET RECOVERY FULL 
GO

ALTER DATABASE [ToDoList] SET  MULTI_USER 
GO

ALTER DATABASE [ToDoList] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [ToDoList] SET DB_CHAINING OFF 
GO

ALTER DATABASE [ToDoList] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [ToDoList] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [ToDoList] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [ToDoList] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [ToDoList] SET QUERY_STORE = ON
GO

ALTER DATABASE [ToDoList] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO

ALTER DATABASE [ToDoList] SET  READ_WRITE 
GO

USE [ToDoList]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 4/10/2023 2:33:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HistTarefa]    Script Date: 4/10/2023 2:33:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HistTarefa](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[TarefaID] [int] NOT NULL,
	[UsuarioID] [int] NOT NULL,
	[DataAcao] [datetime2](7) NOT NULL,
	[Acao] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_HistTarefa] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ListaTarefas]    Script Date: 4/10/2023 2:33:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ListaTarefas](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[NomeLista] [nvarchar](max) NULL,
	[UsuarioID] [int] NOT NULL,
 CONSTRAINT [PK_ListaTarefas] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tarefa]    Script Date: 4/10/2023 2:33:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tarefa](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ListaTarefaID] [int] NOT NULL,
	[Titulo] [nvarchar](255) NOT NULL,
	[Descricao] [nvarchar](1000) NULL,
	[DataCriacao] [datetime2](7) NOT NULL,
	[DataLimite] [datetime2](7) NULL,
	[DataAlteracao] [datetime2](7) NULL,
	[Prioridade] [int] NOT NULL,
	[Status] [int] NULL,
	[Anexo] [varbinary](max) NULL,
	[CriadorID] [int] NOT NULL,
	[UltAlteradorID] [int] NULL,
	[ListaTarefasID] [int] NULL,
	[TarefaID] [int] NULL,
 CONSTRAINT [PK_Tarefa] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TarefaUsuarioTarefa]    Script Date: 4/10/2023 2:33:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TarefaUsuarioTarefa](
	[TarefasID] [int] NOT NULL,
	[UsuariosTarefaID] [int] NOT NULL,
 CONSTRAINT [PK_TarefaUsuarioTarefa] PRIMARY KEY CLUSTERED 
(
	[TarefasID] ASC,
	[UsuariosTarefaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 4/10/2023 2:33:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [nvarchar](max) NOT NULL,
	[Login] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Senha] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UsuarioTarefa]    Script Date: 4/10/2023 2:33:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsuarioTarefa](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[TarefaID] [int] NOT NULL,
	[UsuarioID] [int] NOT NULL,
	[NivelPermissao] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_UsuarioTarefa] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UsuarioUsuarioTarefa]    Script Date: 4/10/2023 2:33:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsuarioUsuarioTarefa](
	[UsuariosID] [int] NOT NULL,
	[UsuariosTarefaID] [int] NOT NULL,
 CONSTRAINT [PK_UsuarioUsuarioTarefa] PRIMARY KEY CLUSTERED 
(
	[UsuariosID] ASC,
	[UsuariosTarefaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[HistTarefa]  WITH CHECK ADD  CONSTRAINT [FK_HistTarefa_Tarefa_TarefaID] FOREIGN KEY([TarefaID])
REFERENCES [dbo].[Tarefa] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[HistTarefa] CHECK CONSTRAINT [FK_HistTarefa_Tarefa_TarefaID]
GO
ALTER TABLE [dbo].[ListaTarefas]  WITH CHECK ADD  CONSTRAINT [FK_ListaTarefas_Usuario_UsuarioID] FOREIGN KEY([UsuarioID])
REFERENCES [dbo].[Usuario] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ListaTarefas] CHECK CONSTRAINT [FK_ListaTarefas_Usuario_UsuarioID]
GO
ALTER TABLE [dbo].[Tarefa]  WITH CHECK ADD  CONSTRAINT [FK_Tarefa_ListaTarefas_ListaTarefasID] FOREIGN KEY([ListaTarefasID])
REFERENCES [dbo].[ListaTarefas] ([ID])
GO
ALTER TABLE [dbo].[Tarefa] CHECK CONSTRAINT [FK_Tarefa_ListaTarefas_ListaTarefasID]
GO
ALTER TABLE [dbo].[Tarefa]  WITH CHECK ADD  CONSTRAINT [FK_Tarefa_Tarefa_TarefaID] FOREIGN KEY([TarefaID])
REFERENCES [dbo].[Tarefa] ([ID])
GO
ALTER TABLE [dbo].[Tarefa] CHECK CONSTRAINT [FK_Tarefa_Tarefa_TarefaID]
GO
ALTER TABLE [dbo].[TarefaUsuarioTarefa]  WITH CHECK ADD  CONSTRAINT [FK_TarefaUsuarioTarefa_Tarefa_TarefasID] FOREIGN KEY([TarefasID])
REFERENCES [dbo].[Tarefa] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TarefaUsuarioTarefa] CHECK CONSTRAINT [FK_TarefaUsuarioTarefa_Tarefa_TarefasID]
GO
ALTER TABLE [dbo].[TarefaUsuarioTarefa]  WITH CHECK ADD  CONSTRAINT [FK_TarefaUsuarioTarefa_UsuarioTarefa_UsuariosTarefaID] FOREIGN KEY([UsuariosTarefaID])
REFERENCES [dbo].[UsuarioTarefa] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TarefaUsuarioTarefa] CHECK CONSTRAINT [FK_TarefaUsuarioTarefa_UsuarioTarefa_UsuariosTarefaID]
GO
ALTER TABLE [dbo].[UsuarioUsuarioTarefa]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioUsuarioTarefa_Usuario_UsuariosID] FOREIGN KEY([UsuariosID])
REFERENCES [dbo].[Usuario] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UsuarioUsuarioTarefa] CHECK CONSTRAINT [FK_UsuarioUsuarioTarefa_Usuario_UsuariosID]
GO
ALTER TABLE [dbo].[UsuarioUsuarioTarefa]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioUsuarioTarefa_UsuarioTarefa_UsuariosTarefaID] FOREIGN KEY([UsuariosTarefaID])
REFERENCES [dbo].[UsuarioTarefa] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UsuarioUsuarioTarefa] CHECK CONSTRAINT [FK_UsuarioUsuarioTarefa_UsuarioTarefa_UsuariosTarefaID]
GO

INSERT INTO [dbo].[Usuario] (Nome, Login, Email, Senha) VALUES ('João Pedro', 'Jhols', 'jphegouet@gmail.com', 'abc123')
GO
INSERT INTO [dbo].[Usuario] (Nome, Login, Email, Senha) VALUES ('Murilo', 'Murileira', 'murilo@gmail.com', 'abc123')
GO
INSERT INTO [dbo].[Usuario] (Nome, Login, Email, Senha) VALUES ('Evandro', 'Evand', 'evandro@gmail.com', 'abc123')
GO