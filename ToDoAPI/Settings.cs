using System.Security.Cryptography;

namespace ToDoAPI
{
    public static class Settings
    {
        public static string Segredo { get; } = GerarChave();

        private static string GerarChave()
        {
            var RNG = RandomNumberGenerator.Create();
            var byteArray = new byte[32];
            RNG.GetBytes(byteArray);
            return Convert.ToBase64String(byteArray);
        }
    }
}
