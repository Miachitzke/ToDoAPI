using TodoListMobile.Views;

namespace TodoListMobile
{
    public partial class App : Application
    {
        public App(Login login)
        {
            InitializeComponent();

            MainPage = new NavigationPage(login);
        }
    }
}