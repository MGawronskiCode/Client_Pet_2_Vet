import React from "react";
import {MDBIcon} from "mdb-react-ui-kit";

export default function MenuElement (props) {
    return (
        <div>
            <p>
                <MDBIcon icon={props.element.icon} /> {props.element.title}
            </p>
        </div>
    )
}