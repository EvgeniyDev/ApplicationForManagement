using AppForManagement.Domain.Entities;
using AppForManagement.Domain.Repository.Abstract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AppForManagement.Domain.Repository.EF
{
    public class EFNotesRepository : INotesRepository
    {
        public readonly ApplicationContext appDBContext;

        public EFNotesRepository(ApplicationContext appDBContext)
        {
            this.appDBContext = appDBContext;
        }

        public void AddNoteAsync(Note newNote)
        {
            appDBContext.Notes.Add(newNote);
            appDBContext.SaveChanges();
        }

        public IEnumerable<Note> GetAllNotes()
        {
            return appDBContext.Notes.ToList();
        }

        public Note GetNoteByID(Guid id)
        {
            return appDBContext.Notes.FirstOrDefault(x => x.Id == id);
        }

        public void RemoveNoteAsync(Guid id)
        {
            var noteToDelete = appDBContext.Notes.FirstOrDefault(x => x.Id == id);

            if (noteToDelete != null)
            {
                appDBContext.Notes.Remove(noteToDelete);
                appDBContext.SaveChanges();
            }
        }

        public void UpdateNoteAsync(Note updatedNote)
        {
            if (updatedNote.Id == default)
            {
                appDBContext.Entry(updatedNote).State = EntityState.Added;
            }
            else
            {
                appDBContext.Entry(updatedNote).State = EntityState.Modified;
            }

            appDBContext.SaveChanges();
        }
    }
}
