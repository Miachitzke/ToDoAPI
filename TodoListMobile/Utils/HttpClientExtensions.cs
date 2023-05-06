using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace TodoListMobile.Utils
{
    public static class HttpClientExtensions
    {
        public static async Task<T> ReadContentAs<T>(this HttpResponseMessage response)
        {

            if (!response.IsSuccessStatusCode)
                throw new ApplicationException($"Something went wrong calling the api: {response.ReasonPhrase}");

            var dataAsString = response.Content.ReadAsStringAsync().Result;

            return JsonSerializer.Deserialize<T>(dataAsString,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
        }

        public static Task<HttpResponseMessage> PostAsJson<T>(this HttpClient httpclient, string url, T data)
        {
            var dataAsString = JsonSerializer.Serialize(data);

            var content = new StringContent(dataAsString, Encoding.UTF8, "application/json");

            return httpclient.PostAsync(url, content);


        }

        public static Task<HttpResponseMessage> PutAsJson<T>(this HttpClient httpclient, string url, T data)
        {
            var dataAsString = JsonSerializer.Serialize(data);

            var content = new StringContent(dataAsString, Encoding.UTF8, "application/json");

            return httpclient.PutAsync(url, content);


        }
    }
}
