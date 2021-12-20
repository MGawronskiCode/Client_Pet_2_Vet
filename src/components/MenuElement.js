import React from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../assets/styles/Menu.css'

export default function MenuElement(props) {

    return (
        <div id="menuElement">
            <p onClick={() => props.setView(props.view)}>
                <MDBIcon icon={props.icon}/>&ensp; {props.title}
            </p>
        </div>
    )
}