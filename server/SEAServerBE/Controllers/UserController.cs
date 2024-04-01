using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SEAServerBE.Domain.IServices;
using SEAServerBE.Domain.Models;
using SEAServerBE.DTO;
using SEAServerBE.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEAServerBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User user)
        {
            try
            {
                var validateExistence = await _userService.ValidateExistence(user);

                if (validateExistence)
                {
                    return BadRequest(new { message = "El usuario " + user.Name + " ya se encuentra registrado." } );
                }

                user.Password = Encrypt.EncryptPassword(user.Password);

                await _userService.SaveUser(user);
                
                return Ok(new { message = "El usuario ha sido registrado exitosamente." });
            } catch(Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // api/User/ChangePassword.
        [Route("ChangePassword")]
        [HttpPut]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordDTO changePassword) 
        {
            try 
            {
                // For a while.
                int idUser = 6;

                string encryptedPassword = Encrypt.EncryptPassword(changePassword.oldPassword);
                var user = await _userService.ValidatePassword(idUser, encryptedPassword);

                if (user == null)
                {
                    return BadRequest(new { message = "El password es incorrecto." });
                }

                return Ok(new { message = "La contraseña ha sido actualizada con éxito." });
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            } 
        }
    }
}
