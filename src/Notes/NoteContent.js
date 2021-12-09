import {MDBIcon} from "mdb-react-ui-kit";
import React from "react";

export default function NoteContent(props) {

    function editNote() {
        alert("Edit note modal will be here.");
    }

    return (
        <div id="content">

            {props.content}
            {
                props.disabled ?
                    <>
                        <MDBIcon id="disabled" fas icon="pencil-alt"/>
                        <MDBIcon id="disabled" fas icon="trash-alt"/>
                    </>
                    :
                    <>
                        <MDBIcon id="edit" fas icon="pencil-alt" onClick={editNote}/>
                        <MDBIcon id="delete" fas icon="trash-alt" onClick={props.getDeleteModal}/>
                    </>
            }
        </div>
    )
}