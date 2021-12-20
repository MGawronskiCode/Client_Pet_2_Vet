export default function UserNotesView(props) {

    // Only for test
    function getNote(note) {
        return (
            <>
                <li>{note.id}</li>
                <li>{note.title}</li>
                <li>{note.content}</li>
                <hr/>
            </>
        )
    }

    return (
        <div>
            {props.notes.map((note) => getNote(note))}
        </div>
    )
}