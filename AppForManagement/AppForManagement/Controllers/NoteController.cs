using System;
using System.Collections.Generic;
using AppForManagement.Domain.Entities;
using AppForManagement.Domain.Repository;
using Microsoft.AspNetCore.Mvc;

namespace AppForManagement.Controllers
{
    [ApiController]
    [Route("api/notes")]
    public class NoteController : Controller
    {
        private readonly DataManager dataManager;

        public NoteController(DataManager dataManager)
        {
            this.dataManager = dataManager;
        }

        [HttpGet]
        public IEnumerable<Note> Get()
        {
            return dataManager.Notes.GetAllNotes();
        }

        [HttpGet("{id}")]
        public Note Get(Guid id)
        {
            return dataManager.Notes.GetNoteByID(id);
        }

        [HttpPost]
        public IActionResult Post(Note note)
        {
            if (ModelState.IsValid)
            {
                dataManager.Notes.AddNoteAsync(note);

                return Ok(note);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Note note)
        {
            if (ModelState.IsValid)
            {
                dataManager.Notes.UpdateNoteAsync(note);

                return Ok(note);
            }

            return BadRequest(ModelState);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            dataManager.Notes.RemoveNoteAsync(id);

            return Ok();
        }
    }
}
