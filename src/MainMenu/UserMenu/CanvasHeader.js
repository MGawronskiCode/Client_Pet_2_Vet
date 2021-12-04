import {Offcanvas} from "react-bootstrap";
import React from "react";

export default function CanvasHeader(props) {
    return (
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
    );
}