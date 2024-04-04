using SEAServerBE.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEAServerBE.Domain.IServices
{
    public interface IUserService
    {
        Task SaveUser(User user);
        Task<bool> ValidateExistence(User user);
        Task<User> ValidatePassword(int idUser, String oldPassword);
        Task UpdatePassword(User user);
    }
}
