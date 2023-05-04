namespace TodoListMobile.Views;

public partial class ListaTarefasEdit : ContentPage
{
	public ListaTarefasEdit()
	{
		InitializeComponent();
	}

    private void Editar(object sender, EventArgs e)
    {
		Navigation.PopModalAsync();
    }
}