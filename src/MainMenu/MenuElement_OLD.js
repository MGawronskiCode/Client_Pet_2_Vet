import React from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import './Menu.css'

export default function MenuElement_OLD(props) {

    return (
        <div>
            <p>
                <a>
                    <MDBIcon icon={props.element.icon}/>&ensp;
                    {props.element.title}
                </a>
            </p>
        </div>
    )
}