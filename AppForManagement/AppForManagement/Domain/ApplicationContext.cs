using Microsoft.EntityFrameworkCore;
using AppForManagement.Domain.Entities;

namespace AppForManagement.Domain
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Note> Notes { get; set; }
    }
}
