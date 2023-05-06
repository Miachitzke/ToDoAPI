using AutoMapper;
using ToDoAPI.Data.DTO;
using ToDoAPI.Models;

namespace ToDoAPI.Config
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                //Informando que o ProductDTO é referencia o Product e vice e versa
                config.CreateMap<ListaTarefaDTO, ListaTarefa>();
                config.CreateMap<ListaTarefa, ListaTarefaDTO>();
            });
            return mappingConfig;
        }
    }
}
