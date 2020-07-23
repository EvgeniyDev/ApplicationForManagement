using AppForManagement.Domain.Repository.Abstract;
using AppForManagement.Domain.Entities;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace AppForManagement.Domain.Repository.JsonDb
{
    public class JsonNotesRepository : INotesRepository
    {
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
                AddNoteAsync(new Note() { Id = new Guid("62c10938-80d3-4f30-b338-cc0e94899b7d"), Name = "Name", Surname = "Surname", Age = 15 });
                AddNoteAsync(new Note() { Id = new Guid("9e17bd9e-f334-465d-ad8d-03e22e43b375"), Name = "Name2", Surname = "Surname", Age = 18 });
                AddNoteAsync(new Note() { Id = new Guid("1b2ae4c0-f4ea-4114-a582-6b893fd30d30"), Name = "Name3", Surname = "Surname", Age = 35 });
            }
            else
            {
                data = JsonConvert.DeserializeObject<IList<Note>>(GetDBDataAsync().Result);
            }
        }

        public async void AddNoteAsync(Note newNote)
        {
            data.Add(newNote);

            var jsonData = JsonConvert.SerializeObject(data);
            await File.WriteAllTextAsync(dataFile, jsonData);
        }

        public IEnumerable<Note> GetAllNotes()
        {
            return data.ToList();
        }

        public Note GetNoteByID(Guid id)
        {
            return data.FirstOrDefault(x => x.Id == id);
        }

        public async void RemoveNoteAsync(Guid id)
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
            var noteIndex = data.ToList().FindIndex(x => x.Id == updatedNote.Id);
            data[noteIndex].Name = updatedNote.Name;
            data[noteIndex].Surname = updatedNote.Surname;
            data[noteIndex].Age = updatedNote.Age;

            var jsonData = JsonConvert.SerializeObject(data);
            await File.WriteAllTextAsync(dataFile, jsonData);
        }

        private async Task<string> GetDBDataAsync()
        {
            return await File.ReadAllTextAsync(dataFile);
        }
    }
}
