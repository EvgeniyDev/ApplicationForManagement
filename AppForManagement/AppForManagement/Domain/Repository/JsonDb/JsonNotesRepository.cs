using AppForManagement.Domain.Repository.Abstract;
using AppForManagement.Domain.Entities;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AppForManagement.Domain.Repository.JsonDb
{
    public class JsonNotesRepository : INotesRepository
    {
        private static int noteId = 0;

        private readonly string dataFile;
        private readonly IList<Note> data;

        public JsonNotesRepository(string dataFile = "./MockedDb/tempDB.json")
        {
            this.dataFile = dataFile;

            if (!File.Exists(dataFile))
            {
                var dBFile = File.Create(dataFile);
                dBFile.Close();
            }

            if (string.IsNullOrEmpty(GetDBDataAsync().Result))
            {
                data = new List<Note>();

                // Dummy data
                AddNoteAsync(new Note() { Name = "Name", Surname = "Surname", Age = 15 });
                AddNoteAsync(new Note() { Name = "Name2", Surname = "Surname", Age = 18 });
                AddNoteAsync(new Note() { Name = "Name3", Surname = "Surname", Age = 35 });
            }
            else
            {
                data = JsonConvert.DeserializeObject<IList<Note>>(GetDBDataAsync().Result);
                noteId = data[data.Count - 1].Id;
            }
        }

        public async void AddNoteAsync(Note newNote)
        {
            newNote.Id = ++noteId;
            data.Add(newNote);

            var jsonData = JsonConvert.SerializeObject(data);
            await File.WriteAllTextAsync(dataFile, jsonData);
        }

        public IEnumerable<Note> GetAllNotes()
        {
            return data.ToList();
        }

        public Note GetNoteByID(int id)
        {
            return data.FirstOrDefault(x => x.Id == id);
        }

        public async void RemoveNoteAsync(int id)
        {
            var noteToRemove = data.FirstOrDefault(x => x.Id == id);

            if (noteToRemove != null)
            {
                data.Remove(noteToRemove);

                var jsonData = JsonConvert.SerializeObject(data);
                await File.WriteAllTextAsync(dataFile, jsonData);
            }
        }

        public async void UpdateNoteAsync(Note updatedNote)
        {
            var noteToUpdate = data.FirstOrDefault(x => x.Id == updatedNote.Id);
            noteToUpdate.Name = updatedNote.Name;
            noteToUpdate.Surname = updatedNote.Surname;
            noteToUpdate.Age = updatedNote.Age;

            var jsonData = JsonConvert.SerializeObject(data);
            await File.WriteAllTextAsync(dataFile, jsonData);
        }

        private async Task<string> GetDBDataAsync()
        {
            return await File.ReadAllTextAsync(dataFile);
        }
    }
}
