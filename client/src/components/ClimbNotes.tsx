import Note from "./Note";

interface ClimbNotesProps {
    notes: string[];
}

export default function ClimbNotes({ notes }: ClimbNotesProps) {
  return (
    <div className='mt-2 space-y-2'>
      <ul
        className='list-disc list-inside
'>
        {notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </ul>
    </div>
  );
}
