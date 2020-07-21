"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
exports.loadNotes = store_1.createAction('[Notes List] Load Notes via Service');
exports.notesLoaded = store_1.createAction('[Notes Effect] Notes Loaded Successfully', store_1.props());
exports.createNote = store_1.createAction('[Create Note Component] Create Note', store_1.props());
exports.deleteNote = store_1.createAction('[Notes List Operations] Delete Note', store_1.props());
exports.updateNote = store_1.createAction('[Notes List Operations] Update Note', store_1.props());
exports.noteActionTypes = {
    loadNotes: exports.loadNotes,
    notesLoaded: exports.notesLoaded,
    createNote: exports.createNote,
    deleteNote: exports.deleteNote,
    updateNote: exports.updateNote
};
//# sourceMappingURL=note.actions.js.map