using System;

namespace AppForManagement.Domain.Entities
{
    public class Note
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
    }
}
