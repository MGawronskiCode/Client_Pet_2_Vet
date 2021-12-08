import React, {useState} from "react";
import NoteHeader from "./NoteHeader";
import NoteContent from "./NoteContent";

export default function Note(props) {

    const [disabled, setDisabled] = useState(true);

    return (
        <div key={props.index}
            onMouseOver={() => setDisabled(false)}
            onMouseOut={() => setDisabled(true)}>

            <div>
                <NoteHeader title={props.note.title} />
            </div>

            <div>
                <NoteContent content={props.note.content} disabled={disabled}/>
            </div>

        </div>
    )
}