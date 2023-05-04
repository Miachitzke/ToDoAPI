namespace TodoListMobile.Views;

public partial class Login : ContentPage
{
    private ListaTarefas _listaTarefas;

	public Login(ListaTarefas listaTarefas)
	{
        this._listaTarefas = listaTarefas;
		InitializeComponent();
	}

    private void Logar(object sender, EventArgs e)
    {
        Navigation.PushAsync(_listaTarefas);
    }
}