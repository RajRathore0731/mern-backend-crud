import express from 'express'
import { getNotes, addNotes, singleNote,updateNote,deleteNote } from '../controllers/noteController.js';

const noteRoute = express.Router();


noteRoute.get('/get-notes',getNotes);
noteRoute.post('/add-notes',addNotes);
noteRoute.get('/single-note/:id',singleNote)
noteRoute.put("/update-note/:id",updateNote)
noteRoute.delete("/delete-note/:id",deleteNote);


export {noteRoute};