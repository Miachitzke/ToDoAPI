using System.Text;
using TodoListMobile.Enums;
using TodoListMobile.Models;
using TodoListMobile.Repositories.Interfaces;

namespace TodoListMobile.Views;

public partial class TarefaAdd : ContentPage
{
    private ITarefaRepository _repository;

    private static DateTime data;
    private static TimeSpan time;

    public TarefaAdd(ITarefaRepository tarefaRepository)
    {
        _repository = tarefaRepository;
        InitializeComponent();
    }

    private void Criar(object sender, EventArgs e)
    {
        if (IsValidate() == false)
            return;

    }

    private void SaveTarefa()
    {
        data = DatePickerDate.Date;
        time = TimePickerTime.Time;

        DateTime dateTime = new DateTime(data.Year, data.Month, data.Day, time.Hours, time.Minutes, time.Seconds);

        Tarefa tarefa = new Tarefa()
        {
            Titulo = EntryTitulo.Text,
            Descricao = EntryDescricao.Text,
            Prioridade = PickerPrioridade.SelectedIndex,
            Status = (StatusTarefa?)PickerStatus.SelectedIndex,
            DataLimite = dateTime
        };

        _repository.Adicionar(tarefa);

    }

    private bool IsValidate()
    {
        bool isValid = true;

        StringBuilder sb = new StringBuilder();

        if (string.IsNullOrEmpty(EntryTitulo.Text) || string.IsNullOrWhiteSpace(EntryTitulo.Text))
        {
            sb.AppendLine("o Campo título deve ser preenchido.");
            isValid = false;
        }
        if (string.IsNullOrEmpty(EntryDescricao.Text) || string.IsNullOrWhiteSpace(EntryDescricao.Text))
        {
            sb.AppendLine("o Campo Descrição deve ser preenchido.");
            isValid = false;
        }

        if (isValid == false)
        {
            LabelError.IsVisible = true;
            LabelError.Text = sb.ToString();
        }

        return isValid;
    }


}