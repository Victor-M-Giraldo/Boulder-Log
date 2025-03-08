import { Note as NoteType } from "../types/note";

interface NoteProps {
    note: NoteType;
}

export default function Note({note}: NoteProps) {
    return (
        <li>{note.content}</li>
    )
}
