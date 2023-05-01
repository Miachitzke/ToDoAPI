using ToDoAPI.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace ToDoAPI.Services
{
    public class TokenSvc
    {
        public static string GenerateToken(Usuario usuario)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Settings.Segredo);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, usuario.ID.ToString()),
                    new Claim(ClaimTypes.Name, usuario.Nome.ToString()),
                    new Claim(ClaimTypes.Email, usuario.Email.ToString()),
                    new Claim(ClaimTypes.UserData, usuario.Login.ToString())

                }),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}