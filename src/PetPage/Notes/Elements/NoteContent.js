import {MDBIcon} from "mdb-react-ui-kit";
import React from "react";

export default function NoteContent(props) {

    function change(event) {
        let id = event.target.attributes.storage.value;
        props.getObjectToChange(id);
        props.getChangeModel();
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
                        <MDBIcon id="edit" fas icon="pencil-alt" storage={props.id} onClick={(event) => change(event)}/>
                        <MDBIcon id="delete" fas icon="trash-alt" onClick={props.getDeleteModal}/>
                    </>
            }
        </div>
    )
}