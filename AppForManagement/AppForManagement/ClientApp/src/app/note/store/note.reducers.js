"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = require("@ngrx/entity");
var store_1 = require("@ngrx/store");
var note_actions_1 = require("./note.actions");
exports.adapter = entity_1.createEntityAdapter();
exports.initialState = exports.adapter.getInitialState({
    notesLoaded: false
});
exports.noteReducer = store_1.createReducer(exports.initialState, store_1.on(note_actions_1.noteActionTypes.notesLoaded, function (state, action) {
    return exports.adapter.addAll(action.notes, __assign(__assign({}, state), { notesLoaded: true }));
}), store_1.on(note_actions_1.noteActionTypes.createNote, function (state, action) {
    return exports.adapter.addOne(action.note, state);
}), store_1.on(note_actions_1.noteActionTypes.deleteNote, function (state, action) {
    return exports.adapter.removeOne(action.noteId, state);
}), store_1.on(note_actions_1.noteActionTypes.updateNote, function (state, action) {
    return exports.adapter.updateOne(action.update, state);
}));
exports.selectAll = (_a = exports.adapter.getSelectors(), _a.selectAll), exports.selectIds = _a.selectIds;
//# sourceMappingURL=note.reducers.js.map