import React from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import './Menu.css'

export default function MenuElement(props) {
    return (
        <div>
            <p>
                <a href="#">
                    <MDBIcon icon={props.element.icon}/>&ensp;
                    {props.element.title}
                </a>
            </p>
        </div>
    )
}