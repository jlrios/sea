using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SEAServerBE.Domain.IServices;
using SEAServerBE.Domain.Models;
using SEAServerBE.Services;
using SEAServerBE.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEAServerBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User user)
        {
            try
            {
                user.Password = Encrypt.EncryptPassword(user.Password);

                var myUser = await _loginService.ValidateUser(user);

                if (myUser == null)
                {
                    return BadRequest(new { message = "Usuario y/o contraseña inválido(s)" });
                }

                return Ok(new { user = myUser.Name });
            } catch(Exception ex)
            {
                return BadRequest(ex.Message);
            } 
        }
    }
}
