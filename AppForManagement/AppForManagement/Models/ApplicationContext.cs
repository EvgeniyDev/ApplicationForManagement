using Microsoft.EntityFrameworkCore;

namespace AppForManagement.Models
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
