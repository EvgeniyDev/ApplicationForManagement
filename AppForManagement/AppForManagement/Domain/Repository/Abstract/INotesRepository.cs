using AppForManagement.Domain.Entities;
using System.Collections.Generic;

namespace AppForManagement.Domain.Repository.Abstract
{
    public interface INotesRepository
    {
        IEnumerable<Note> GetAllNotes();
        Note GetNoteByID(int id);
        void AddNoteAsync(Note newNote);
        void UpdateNoteAsync(Note updatedNote);
        void RemoveNoteAsync(int id);
    }
}
