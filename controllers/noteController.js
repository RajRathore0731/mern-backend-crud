import {Note} from '../models/noteModel.js'

const getNotes = async (req,res) =>{
    const notes = await Note.find();
    res.json({notes:notes})
}

const addNotes = async (req,res) =>{
    const title = req.body.title;
    const body = req.body.body;
    const note = await Note.create({
        title:title,
        body:body
    });
    res.json({note:note});
}

const singleNote = async (req,res) =>{
    const noteId = req.params.id;
    const note = await Note.findById(noteId);

    res.json({note:note})
}

const updateNote = async (req,res) =>{
    //getting the id to update the data
    const noteId = req.params.id;
    //getting the data to update
    const title = req.body.title;
    const body = req.body.body;

    const note = await Note.findByIdAndUpdate(noteId,{
        title:title,
        body:body
    });

    const changedNote  = await Note.findById(noteId);
    res.json({note:changedNote})
}

const deleteNote = async (req,res) =>{
    const noteId = req.params.id;

    await Note.deleteOne({_id:noteId});

    const note = await Note.find();

    res.json({success:"deleted successfully",note:note})
}

export {getNotes,addNotes,singleNote,updateNote, deleteNote}