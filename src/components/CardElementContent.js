import {MDBIcon} from "mdb-react-ui-kit";
import React from "react";
import {Operation} from "../commons/Operations";

export default function CardElementContent({ id, disabled, setShow, setCurrentElement, setCurrentOperation, element,
                                               setElementToChange}) {

    function changeObject(event, operation) {
        let id = event.target.attributes.storage.value;
        switch (operation) {
            case Operation.CHANGE:
                setCurrentOperation(Operation.CHANGE);
                break;
            case Operation.DELETE:
                setCurrentOperation(Operation.DELETE);
                break;
        }
        setStates(id);
    }

    function setStates(id) {
        setCurrentElement();
        setElementToChange(id, element);
        setShow();
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
                                 onClick={(event) => changeObject(event, Operation.CHANGE)}/>
                        <MDBIcon id="delete" fas icon="trash-alt" storage={id}
                                 onClick={(event) => changeObject(event, Operation.DELETE)}/>
                    </>
            }
        </div>
    )
}