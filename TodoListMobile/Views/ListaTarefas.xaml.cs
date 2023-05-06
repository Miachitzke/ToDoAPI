using TodoListMobile.Repositories.Interfaces;

namespace TodoListMobile.Views;

public partial class ListaTarefas : ContentPage
{
	private ListaTarefasAdd _listaTarefasAdd;
    private ListaTarefasEdit _listaTarefasEdit;

    IListaTarefasRepository _listaTarefasRepository;

    public ListaTarefas(ListaTarefasAdd listaTarefasAdd, ListaTarefasEdit listaTarefasEdit, IListaTarefasRepository listaTarefasRepository)
	{
		this._listaTarefasAdd = listaTarefasAdd;
		this._listaTarefasEdit = listaTarefasEdit;

        _listaTarefasRepository = listaTarefasRepository;

        _listaTarefasRepository.BuscarTodasListaTarefas();

        InitializeComponent();
	}

    private void ListaTarefasAdd(object sender, EventArgs e)
    {
		Navigation.PushModalAsync(_listaTarefasAdd);
    }


}