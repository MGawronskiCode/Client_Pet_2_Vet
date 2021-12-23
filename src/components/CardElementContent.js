import {MDBIcon} from "mdb-react-ui-kit";
import React from "react";

export default function CardElementContent(props) {

    function changeObject(event) {
        let id = event.target.attributes.storage.value;
        props.getObjectToChange(id);
        props.getChangeModel();
    }

    function deleteObject(event) {
        let id = event.target.attributes.storage.value;
        props.getObjectToChange(id);
        props.getDeleteModal();
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
                        <MDBIcon id="edit" fas icon="pencil-alt" storage={props.id} onClick={(event) => changeObject(event)}/>
                        <MDBIcon id="delete" fas icon="trash-alt" storage={props.id} onClick={(event) => deleteObject(event)}/>
                    </>
            }
        </div>
    )
}