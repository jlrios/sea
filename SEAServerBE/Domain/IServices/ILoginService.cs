using SEAServerBE.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEAServerBE.Domain.IServices
{
    public interface ILoginService
    {
        Task<User> ValidateUser(User user);
    }
}
