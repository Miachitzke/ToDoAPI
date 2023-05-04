namespace TodoListMobile.Views;

public partial class ListaTarefasAdd : ContentPage
{
	public ListaTarefasAdd()
	{
		InitializeComponent();
	}

    private void Criar(object sender, EventArgs e)
    {
		Navigation.PopModalAsync();
    }
}