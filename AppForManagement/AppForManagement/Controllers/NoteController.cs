using System.Collections.Generic;
using System.Linq;
using AppForManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace AppForManagement.Controllers
{
    [ApiController]
    [Route("api/notes")]
    public class NoteController : Controller
    {
        private readonly ApplicationContext db;

        public NoteController(ApplicationContext context)
        {
            db = context;

            if (!db.Notes.Any())
            {
                db.Notes.Add(new Note { Name = "A", Surname = "B", Age = 38 });
                db.Notes.Add(new Note { Name = "C", Surname = "D", Age = 38 });
                db.Notes.Add(new Note { Name = "E", Surname = "F", Age = 36 });

                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Note> Get()
        {
            return db.Notes.ToList();
        }

        [HttpGet("{id}")]
        public Note Get(int id)
        {
            return db.Notes.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public IActionResult Post(Note note)
        {
            if (ModelState.IsValid)
            {
                db.Notes.Add(note);
                db.SaveChanges();

                return Ok(note);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Note note)
        {
            if (ModelState.IsValid)
            {
                db.Update(note);
                db.SaveChanges();

                return Ok(note);
            }

            return BadRequest(ModelState);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var note = db.Notes.FirstOrDefault(x => x.Id == id);

            if (note != null)
            {
                db.Notes.Remove(note);
                db.SaveChanges();
            }

            return Ok(note);
        }
    }
}
