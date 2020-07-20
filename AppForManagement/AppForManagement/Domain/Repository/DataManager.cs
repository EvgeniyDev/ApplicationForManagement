using AppForManagement.Domain.Repository.Abstract;

namespace AppForManagement.Domain.Repository
{
    public class DataManager
    {
        public INotesRepository Notes { get; set; }

        public DataManager(INotesRepository notesRepository)
        {
            Notes = notesRepository;
        }
    }
}
