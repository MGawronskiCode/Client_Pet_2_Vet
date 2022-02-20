import {MDBIcon} from "mdb-react-ui-kit";
import React from "react";
import {Operation} from "../commons/Operations";

export default function CardElementContent({id, disabled, setShow, setCurrentElement, setCurrentOperation, element,
                                               setElementToChange}) {

    function changeObject(event) {
        let id = event.target.attributes.storage.value;
        setCurrentElement();
        setElementToChange(id, element)
        setCurrentOperation(Operation.CHANGE)
        setShow();
    }

    function deleteObject(event) {
        let id = event.target.attributes.storage.value;
        // setElementToChange(id, elementTochange);
        // getDeleteModal();
    }

    return (
        <div id="content">

            {
                disabled ?
                    <>
                        <MDBIcon id="disabled" fas icon="pencil-alt"/>
                        <MDBIcon id="disabled" fas icon="trash-alt"/>
                    </>
                    :
                    <>
                        <MDBIcon id="edit" fas icon="pencil-alt" storage={id}
                                 onClick={(event) => changeObject(event)}/>
                        <MDBIcon id="delete" fas icon="trash-alt" storage={id}
                                 onClick={(event) => deleteObject(event)}/>
                    </>
            }
        </div>
    )
}