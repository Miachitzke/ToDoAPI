using TodoListMobile.Models;
using TodoListMobile.Repositories.Interfaces;

namespace TodoListMobile.Views;

public partial class ListaTarefasAdd : ContentPage
{
    IListaTarefasRepository _listaTarefasRepository;
            
    public ListaTarefasAdd(IListaTarefasRepository listaTarefasRepository)
	{
        _listaTarefasRepository = listaTarefasRepository;

        InitializeComponent();
    }

    private void Criar(object sender, EventArgs e)
    {
		Navigation.PopModalAsync();
    }
    private void SaveListaTarefa()
    {

        ListaTarefa listaTarefa = new ListaTarefa() 
        {
           NomeLista = EntryTitulo.Text
        };

        _listaTarefasRepository.Adicionar(listaTarefa);

    }
}