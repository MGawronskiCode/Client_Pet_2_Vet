import React from "react";
import {MDBContainer, MDBRow} from "mdb-react-ui-kit";

export default function CardHeader(props) {

    return (
        <div id="card-title-badge" className="container-xl">
            <MDBContainer>
                <MDBRow>
                    <div id="card-title">
                        {props.title}
                    </div>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}