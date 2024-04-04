using Microsoft.EntityFrameworkCore;
using SEAServerBE.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SEAServerBE.Persistence.Context
{
    public class ApplicationDbContext: DbContext
    {
        public DbSet<User> User { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {

        }
    }
}
