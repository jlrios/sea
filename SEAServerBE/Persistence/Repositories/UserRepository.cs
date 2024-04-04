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
    public class UserRepository: IUserRepository
    {
        private readonly ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task SaveUser(User user)
        {
            _context.Add(user);
            await _context.SaveChangesAsync();

        }

        public async Task<bool> ValidateExistence(User user)
        {
            var validateExistence = await _context.User.AnyAsync(
                x => x.Name == user.Name);
            return validateExistence;
        }

        public async Task<User> ValidatePassword(int idUser, string oldPassword)
        {
            var user = await _context.User.Where(x => x.IdUser == idUser && x.Password == oldPassword).FirstOrDefaultAsync();
            return user;
        }

        public async Task UpdatePassword(User user)
        {
            _context.Update(user);
            await _context.SaveChangesAsync();
        }
    }
}
