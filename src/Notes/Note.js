import React from "react";
import NoteHeader from "./NoteHeader";
import NoteContent from "./NoteContent";

export default function Note (props) {

    return (
        <div key={props.index}>
            <NoteHeader title={props.note.title} />
            <NoteContent content={props.note.content} />
        </div>
    )
}