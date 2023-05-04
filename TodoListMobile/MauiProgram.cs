using Microsoft.Extensions.Logging;
using TodoListMobile.Repositories.Implementations;
using TodoListMobile.Repositories.Interfaces;
using TodoListMobile.Views;

namespace TodoListMobile
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                    fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
                })
                .RegisterRepositories()
                .RegisterViews();

#if DEBUG
		builder.Logging.AddDebug();
#endif

            return builder.Build();
        }

        public static MauiAppBuilder RegisterRepositories(this MauiAppBuilder mauiAppBuilder) {
            mauiAppBuilder.Services.AddTransient<IListaTarefasRepository, ListaTarefasRepository>();
            mauiAppBuilder.Services.AddTransient<ITarefaRepository, TarefaRepositoryImpl>();
            return mauiAppBuilder;
        }

        public static MauiAppBuilder RegisterViews(this MauiAppBuilder mauiAppBuilder)
        {
            mauiAppBuilder.Services.AddTransient<ListaTarefasAdd>();
            mauiAppBuilder.Services.AddTransient<ListaTarefasEdit>();
            mauiAppBuilder.Services.AddTransient<ListaTarefas>();
            mauiAppBuilder.Services.AddTransient<TarefaAdd>();
            mauiAppBuilder.Services.AddTransient<TarefaEdit>();
            mauiAppBuilder.Services.AddTransient<TarefaList>();
            mauiAppBuilder.Services.AddTransient<Login>();
            return mauiAppBuilder;
        }
    }
}