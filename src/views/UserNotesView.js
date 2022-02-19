export default function UserNotesView(props) {

    // Only for test
    function getNote(note) {
        console.log(note)
        return (
            <div key={note.id}>
                <li>{note.id}</li>
                <li>{note.title}</li>
                <li>{note.content}</li>
                <hr/>
            </div>
        )
    }

    return (
        <div>
            {props.notes.map((note) => getNote(note))}
        </div>
    )
}