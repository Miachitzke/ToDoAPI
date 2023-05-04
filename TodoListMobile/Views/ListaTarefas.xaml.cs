namespace TodoListMobile.Views;

public partial class ListaTarefas : ContentPage
{
	private ListaTarefasAdd _listaTarefasAdd;
    private ListaTarefasEdit _listaTarefasEdit;

    public ListaTarefas(ListaTarefasAdd listaTarefasAdd, ListaTarefasEdit listaTarefasEdit)
	{
		this._listaTarefasAdd = listaTarefasAdd;
		this._listaTarefasEdit = listaTarefasEdit;

        InitializeComponent();
	}

    private void ListaTarefasAdd(object sender, EventArgs e)
    {
		Navigation.PushModalAsync(_listaTarefasAdd);
		
    }
}