interface NoteProps {
    note: string;
}

export default function Note({note}: NoteProps) {
    return (
        <li>{note}</li>
    )
}
