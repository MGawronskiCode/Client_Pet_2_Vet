import React from "react";
import {MDBIcon} from "mdb-react-ui-kit";

export default function CardHeader(props) {

    function addNewCard() {
        alert("Modal with input boxes will be here.");
    }

    return (
        <div>
            <div id="cardTitle">
                {props.title}
            </div>
            {
                props.disabled ?
                    <MDBIcon id="disabled" fas icon="plus-circle"/>
                    :
                    <MDBIcon id="add" fas icon="plus-circle" onClick={addNewCard}/>
            }
        </div>
    )
}