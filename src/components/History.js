import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";
import React, {useState} from "react";
import CardHeader from "./CardHeader";


export default function History (props) {

    const [disabled, setDisabled] = useState(true);

    return (
        <div
            onMouseOver={() => setDisabled(false)}
            onMouseOut={() => setDisabled(true)}>
            <MDBCard id="card">

                <MDBCardTitle>
                    <CardHeader
                        title="History"
                        disabled={disabled}
                        getAddModal={props.getAddModal} />
                </MDBCardTitle>

                <MDBCardBody>

                </MDBCardBody>

            </MDBCard>
        </div>
    )
}