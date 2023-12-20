import mongoose,{Schema} from "mongoose";

const noteSchema = Schema({
    title:String,
    body:String
})

const Note = mongoose.model("Note",noteSchema);

export {Note}