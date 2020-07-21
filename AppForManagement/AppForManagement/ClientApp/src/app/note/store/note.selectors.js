"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var note_reducers_1 = require("./note.reducers");
exports.noteFeatureSelector = store_1.createFeatureSelector('notes');
exports.getAllNotes = store_1.createSelector(exports.noteFeatureSelector, note_reducers_1.selectAll);
exports.areNotesLoaded = store_1.createSelector(exports.noteFeatureSelector, function (state) { return state.notesLoaded; });
//# sourceMappingURL=note.selectors.js.map