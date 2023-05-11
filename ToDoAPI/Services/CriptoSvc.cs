using System.Security.Cryptography;
using System.Text;

namespace ToDoAPI.Services
{
    public class CriptoSvc
    {
        public static string Criptografar(string senha)
        {
            using(SHA256 sha256 = SHA256.Create())
            {
                byte[] bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(senha));

                StringBuilder sb = new StringBuilder();
                for(int i = 0;i < bytes.Length;i++)
                {
                    sb.Append(bytes[i].ToString("x2"));
                }
                return sb.ToString();
            }
        }
    }
}
