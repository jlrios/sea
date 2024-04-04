using Microsoft.EntityFrameworkCore;
using SEAServerBE.Domain.IRepositories;
using SEAServerBE.Domain.Models;
using SEAServerBE.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEAServerBE.Persistence.Repositories
{
    public class LoginRepository: ILoginRepository
    {
        private readonly ApplicationDbContext _context;

        public LoginRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<User> ValidateUser(User user)
        {
            var myUser = await _context.User.Where(x => x.Name == user.Name && x.Password == user.Password)
                .FirstOrDefaultAsync();

            return myUser;
        }
    }
}
